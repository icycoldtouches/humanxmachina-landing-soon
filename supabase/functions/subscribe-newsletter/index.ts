import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY');

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);

    // Store email in Supabase
    const { error: dbError } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }]);

    if (dbError) {
      console.error('Database error:', dbError);
      if (dbError.code === '23505') { // unique_violation
        return new Response(
          JSON.stringify({ error: 'You are already subscribed!' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw dbError;
    }

    // Add contact to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        attributes: {
          SIGNUP_DATE: new Date().toISOString(),
        },
        listIds: [2], // Default list ID in Brevo
        emailBlacklisted: false,
        smsBlacklisted: false,
      }),
    });

    const brevoData = await response.json();

    if (!response.ok) {
      console.error('Brevo API error:', brevoData);
      // If the contact already exists in Brevo, we consider it a success
      if (response.status === 400 && brevoData.message?.includes('Contact already exist')) {
        return new Response(
          JSON.stringify({ message: 'Subscription successful!' }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(brevoData.message || 'Failed to subscribe to newsletter');
    }

    return new Response(
      JSON.stringify({ message: 'Subscription successful!' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process subscription' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
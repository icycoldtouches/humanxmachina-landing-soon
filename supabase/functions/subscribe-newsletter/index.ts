import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')
const BREVO_LIST_ID = 4  // Updated newsletter list ID

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Validate BREVO_API_KEY
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not found in environment variables');
      throw new Error('Configuration error: API key not found');
    }

    const { email } = await req.json()

    if (!email) {
      return new Response(
        JSON.stringify({ message: 'Email is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    console.log('Processing subscription for email:', email);

    // First, check if email already exists in Supabase
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: existingSubscription } = await supabaseClient
      .from('newsletter_subscriptions')
      .select('email')
      .eq('email', email)
      .single();

    if (existingSubscription) {
      return new Response(
        JSON.stringify({ 
          message: 'This email is already subscribed to our newsletter',
          code: 'duplicate_parameter'
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      );
    }

    // Store in Supabase
    const { error: dbError } = await supabaseClient
      .from('newsletter_subscriptions')
      .insert([{ email }])

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Database error: ${dbError.message}`)
    }

    console.log('Successfully stored email in database');

    // Add to Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Brevo API error:', data);
      // Delete the Supabase entry if Brevo fails
      await supabaseClient
        .from('newsletter_subscriptions')
        .delete()
        .eq('email', email);
        
      return new Response(
        JSON.stringify({ 
          message: 'Failed to add contact to newsletter service',
          code: 'brevo_error',
          details: data
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      );
    }

    console.log('Successfully added contact to Brevo');

    return new Response(
      JSON.stringify({ message: 'Successfully subscribed to newsletter' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error in subscribe-newsletter function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error instanceof Error ? error.stack : undefined 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    )
  }
})
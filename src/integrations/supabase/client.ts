import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Get environment variables from Supabase Edge Functions
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl) throw new Error('SUPABASE_URL is not defined');
if (!supabaseAnonKey) throw new Error('SUPABASE_ANON_KEY is not defined');

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ihmlbokpiphvfuiqsjdb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlobWxib2twaXBodmZ1aXFzamRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyOTM4NTMsImV4cCI6MjA1Mjg2OTg1M30.DVinIK1U5yEtjuoz7ablURw68pxV0KUdmnmxmKqpo8w";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
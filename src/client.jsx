// client.jsx

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://virdlcebyrkzsqgpwsel.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpcmRsY2VieXJrenNxZ3B3c2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4ODUxNjMsImV4cCI6MjAyODQ2MTE2M30.L-pZ7qIJuhWE4vyglakIj73JdSsqjI712oCd82MuTZg';

export const supabase = createClient(supabaseUrl, supabaseKey);

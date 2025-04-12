import { createClient } from '@supabase/supabase-js';

const URL = 'https://zwfdzwvvotbllpxeyuoi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3ZmR6d3Z2b3RibGxweGV5dW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NzUwOTMsImV4cCI6MjA2MDA1MTA5M30.ANcXh9AuIgkkR59dGdhNKV2vpXvTrLi6BpLjfBXIqTg'

export const supabase = createClient(URL, API_KEY);
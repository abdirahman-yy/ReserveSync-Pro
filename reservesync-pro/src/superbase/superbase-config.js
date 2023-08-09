import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://htecmmpivhbfpvzmpbbn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZWNtbXBpdmhiZnB2em1wYmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NjA3ODgsImV4cCI6MjAwNzEzNjc4OH0.CZYL01YdwwRMXeiEiwBcAuvCOO-o2UO-JJvlnnmdzJQ';

const supabase = createClient(supabaseUrl, supabaseKey);

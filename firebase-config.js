// Supabase Configuration
const SUPABASE_URL = "https://sfivykqorsflcgctqzyu.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmaXZ5a3FvcnNmbGNnY3Rxenl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3OTU3MzEsImV4cCI6MjA4MzM3MTczMX0.arx11KgRsnFP4SjBavLKnwD4dtyS10dHnSNQJhpfpYA";

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other files
window.supabaseClient = supabase;

console.log("🚀 Supabase initialized");

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dpsieexmszhjzlgduagz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwc2llZXhtc3poanpsZ2R1YWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MDYzODQsImV4cCI6MjA1ODQ4MjM4NH0.4SbIyNmbhgfggsaEy1M9IgYeH9wbnEyuow2bmVmm42E";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

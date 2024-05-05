import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFocXRicXF6dmdyYW93c2NleWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4OTk3MTMsImV4cCI6MjAzMDQ3NTcxM30.-lb-YSWTkjgKCo5A8DkFmlV9frM_cy6B4rOyXxAFJCw";
const SUPABASE_URL = "https://ahqtbqqzvgraowsceyas.supabase.co";

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  return {
    supabase,
  };
};
export default useSupabase;

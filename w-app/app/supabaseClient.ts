import "dotenv/config.js";
import { createClient } from "@supabase/supabase-js";

export default createClient(
  process.env.SUPABASE_API_URL!,
  process.env.SUPABASE_API_KEY!
);

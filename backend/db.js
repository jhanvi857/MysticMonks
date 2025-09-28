const {createClient} = require("@supabase/supabase-js");
// deployed database url and api key...
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl,supabaseKey);
module.exports = supabase;
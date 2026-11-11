const SUPABASE_URL = "https://vdxjbyhntvygxyjjojxb.supabase.co";
const SUPABASE_KEY = = "sb_publishable_dVH6zQSlbwoVF683NEhm2g_nT9IlCdj";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


async function dangki() {
  const username = document.getElementById("username").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const re-password = document.getElementById("re-password").value
}

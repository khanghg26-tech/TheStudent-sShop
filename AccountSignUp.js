const SUPABASE_URL = "https://vdxjbyhntvygxyjjojxb.supabase.co";
const SUPABASE_KEY = = "sb_publishable_dVH6zQSlbwoVF683NEhm2g_nT9IlCdj";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


async function Register() {
  const RegisterUsername = document.getElementById("RegisterUsername").value
  const RegisterEmail = document.getElementById("RegisterEmail").value
  const RegisterPassword = document.getElementById("RegisterPassword").value
  const RegisterRe-password = document.getElementById("RegisterRe-password").value
}

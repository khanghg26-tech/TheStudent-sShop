const SUPABASE_URL = "https://vdxjbyhntvygxyjjojxb.supabase.co";
const SUPABASE_KEY = "sb_publishable_dVH6zQSlbwoVF683NEhm2g_nT9IlCdj";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


async function Register() {
  const RegisterUsername = document.getElementById("RegisterUsername").value
  const RegisterEmail = document.getElementById("RegisterEmail").value
  const RegisterPassword = document.getElementById("RegisterPassword").value
  const RegisterRepassword = document.getElementById("RegisterRepassword").value

  if (RegisterUsername === "" || RegisterEmail === "" || 
      RegisterPassword === "" || RegisterRepassword === """) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
      }
      
if (RegisterPassword.length < 6) {
  alert("Mật khẩu phải có ít nhất 6 ký tự!");
  return;
}
if (RegisterPassword !== RegisterRepassword) {
  alert("Mật khẩu nhập lại không khớp!");
  return;
}

const { data, error} = await superbase.auth.SignUp({
  email: RegisterEmail,
  password: RegisterPassword,
  options: {
    data: {
      username: RegisterUsername
    }
  }
});
if (error) {
  alert("Đăng kí thất bại" + error.message);
  return;
}
alert("Đăng ký thành công");
if (data.session) {
  ShowUser(data.session.user);
}
}

async function LogIn() {
  const LogInEmail = document.getElementById("LogInEmail").value
  const LogInPassword = document.getElementById("LogInPassword").value

  
}

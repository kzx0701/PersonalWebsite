import { supabase } from "../lib/supabaseClient";
// 登录
export const login = async (userName: string, password: string) => {
  if (await verify(userName, password)) {
    console.log("验证成功");
  } else {
    console.log("验证失败");
  }
};

// 验证
const verify = async (userName: string, password: string) => {
  if (!userName || !password) {
    console.error("用户名和密码不能为空");
    return false;
  } else {
    const { error } = await supabase.auth.signInWithPassword({
      email: userName,
      password: password,
    });
    if (error) {
      console.error("登录失败", error);
    } else {
      console.log("登录成功");
    }
  }
  return true;
};

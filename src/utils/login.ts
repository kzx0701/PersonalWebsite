import { supabase } from "../lib/supabaseClient";

// 邮箱登录
export const loginWithEmail = async (userName: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email: userName, password });
    if (error) {
      console.log("登录失败", error);
      return { res: false, message: error.message };
    }
    console.log("登录成功", data);
    const sessionData = {
      token: data.session.access_token,
      expiresAt: Date.now() + data.session.expires_in * 1000, // 转换为毫秒
      user: data.user,
    };
    localStorage.setItem("coco-session", JSON.stringify(sessionData));
    return { res: true, message: "登录成功" };
  } catch {
    console.log("登录异常");
    return { res: false, message: "网络错误，请重试" };
  }
};

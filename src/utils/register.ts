import { supabase } from "../lib/supabaseClient";

export const registerWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error("注册失败", error);
      return { res: false, message: error.message };
    } else {
      console.log("注册成功", data);
      return { res: true, message: "注册成功" };
    }
  } catch (err) {
    console.error("注册异常", err);
    return { res: false, message: "网络错误，请重试" };
  }
};

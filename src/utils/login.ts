import { supabase } from "../lib/supabaseClient";
import { useAuthStore } from "../stores/authStore";

// 邮箱登录
export const loginWithEmail = async (userName: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email: userName, password });
    if (error) {
      console.log("登录失败", error);
      return { res: false, message: error.message };
    }
    console.log("登录成功", data);
    const authStore = useAuthStore();
    authStore.setSession(data);
    return { res: true, message: "登录成功" };
  } catch {
    console.log("登录异常");
    return { res: false, message: "网络错误，请重试" };
  }
};

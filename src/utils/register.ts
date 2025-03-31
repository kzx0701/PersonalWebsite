import { supabase } from "../lib/supabaseClient";

export const registerWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error("注册失败", error);
  } else {
    console.log("注册成功", data);

  }
};

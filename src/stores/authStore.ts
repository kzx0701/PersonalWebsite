import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    session: {} as any, // session
    user: {} as any, // 用户信息
    expiresAt: 0 as number, // 到期时间
  }),
  actions: {
    
  }
});

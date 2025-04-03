import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    session: {} as any, // session
    user: {} as any, // 用户信息
    expiresAt: 0 as number, // 到期时间
  }),
  actions: {
    // 存储session
    setSession(session: any) {
      this.session = session.session;
      this.user = session.user;
      this.expiresAt = session.session.expires_at * 1000 + session.session.expires_in;
      console.log("session", this.session, this.user, this.expiresAt);
      localStorage.setItem(
        "coco_auth",
        JSON.stringify({
          session: this.session,
          user: this.user,
          expiresAt: this.expiresAt,
        })
      );
    },

    // 加载session
    async loadSession() {
      const sessionData = localStorage.getItem("coco_auth");
      if (sessionData) {
        const { session, user, expiresAt } = JSON.parse(sessionData);
        console.log("加载session", expiresAt, Date.now());
        if (expiresAt < Date.now()) {
          console.log("session已过期");
          this.clearSession();
          return;
        }
        this.session = session;
        this.user = user;
        this.expiresAt = expiresAt;
      }
    },

    // 清除session
    clearSession() {
      this.session = {};
      this.user = {};
      this.expiresAt = 0;
      localStorage.removeItem("coco_auth");
    },
  },
});

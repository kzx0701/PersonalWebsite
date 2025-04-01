<template>
  <div class="login_frame">
    <div class="form_frame">
      <h1 class="title">欢迎登录</h1>
      <div class="group">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
          <path
            d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
            fill="currentColor"></path>
        </svg>
        <input id="email" v-model="email" class="input" type="text" placeholder="输入登录邮箱" />
      </div>
      <div class="group">
        <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            stroke-linejoin="round"
            stroke-linecap="round"></path>
        </svg>
        <input id="password" v-model="password" class="input" type="password" placeholder="输入登录密码" />
      </div>
      <div class="flex gap-10">
        <button class="btn" @click="registerModalShow = true">注册</button>
        <button @click="loginVerify" class="btn">登录</button>
      </div>
    </div>
    <!-- 注册弹窗 -->
    <v-dialog v-model="registerModalShow" @update:modelValue="(val) => (registerModalShow = val)">
      <div class="flex justify-center items-center">
        <RegisterModal @close="registerModalShow = false" />
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getUserAuth } from "../services/userService";
import { login } from "../utils/login";
// 用户名、密码
const password = ref("");
const email = ref("");

const registerModalShow = ref(false);

onMounted(() => {
  getUserAuth().then((res) => {
    console.log("用户授权信息：", res);
  });
});

// 登陆验证
const loginVerify = () => {
  console.log("username", email.value);
  console.log("password", password.value);
  login(email.value, password.value);
};
</script>

<style scoped lang="scss">
// 背景样式
.login_frame {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;
  background-color: var(--login-bg-main-color);
  background-image: linear-gradient(-45deg, var(--login-bg-main-color) 0%, var(--login-bg-sub-color) 100%);
  transition: background-color 0.8s ease, background-image 0.8s ease;
  z-index: 0;
}

.form_frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  top: -5%;
}

// 输入框样式
.group {
  display: flex;
  line-height: 2rem;
  align-items: center;
  position: relative;
  max-width: 20rem;
  margin-bottom: 10px;
  animation: titleFadeIn 1s ease-in-out;
  animation-delay: 0.2s; // 输入框延迟出现
}

.input {
  width: 100%;
  height: 2.4rem;
  line-height: 2rem;
  padding: 0 2rem;
  padding-left: 3rem;
  border: 2px solid transparent;
  border-radius: 0.3rem;
  outline: none;
  background-color: #f8fafc;
  color: #0d0c22;
  transition: 0.4s ease;
  font-size: 0.9rem;
}

.input::placeholder {
  color: #94a3b8;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(129, 140, 248);
  background-color: #fff;
  box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: none;
  width: 1rem;
  height: 1rem;
}

// 按钮样式
.btn {
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: var(--login-btn-bg);
  color: var(--login-btn-text);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px var(--login-btn-shadow);
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  margin-top: 2rem;
}

.btn:active {
  scale: 0.92;
}

.btn:hover {
  background: var(--login-btn-hover);
  background: linear-gradient(270deg, var(--login-btn-hover-bg1) 0%, var(--login-btn-hover-bg2) 60%);
  color: var(--login-btn-hover-text);
}

// 标题样式
.title {
  font-size: 2rem;
  font-weight: 600;
  background: linear-gradient(135deg, #af40ff, #5b42f3 50%, #00ddeb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(151, 65, 252, 0.2);
  animation: titleFadeIn 1s ease-in-out;
  animation-delay: 0.4s; // 同步动画
}

@keyframes titleFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

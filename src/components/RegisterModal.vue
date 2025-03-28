<template>
  <!-- From Uiverse.io by VIJAYAACHI -->
  <div class="form-container">
    <p class="title">新用户注册</p>
    <form class="form">
      <div class="input-group">
        <label for="email">邮箱</label>
        <input placeholder="请输入邮箱" v-model="email" id="email" name="email" type="email" />
        <div v-if="emailWarning" class="warning-text">{{ emailWarning }}</div>
        <label for="password">密码</label>
        <input placeholder="请输入密码" v-model="password" id="password" name="password" type="password" />
        <div v-if="passwordWarning" class="warning-text">{{ passwordWarning }}</div>
        <label for="confirmPassword">确认密码</label>
        <input placeholder="请输入确认密码" v-model="confirmPassword" type="password" />
      </div>
    </form>
    <button style="margin-top: 6%" class="sign" @click="submit">提交</button>
    <div class="social-message">
      <div class="line"></div>
      <p class="message">Entre Details to view Virtual Tour</p>
      <div class="line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { registerWithEmail } from "../utils/register";
import { ref } from "vue";
// 注册表单数据
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
// 提示文本
const emailWarning = ref("");
const passwordWarning = ref("");
const confirmPasswordWarning = ref("");

// 提交
const submit = async () => {
  const isValid = await formVerify();
  if (!isValid) {
    return;
  }
  if (password.value !== confirmPassword.value && password.value !== "") {
    console.log("email", email.value);
    console.log("password", password.value);
    console.log("confirmPassword", confirmPassword.value);
    console.log("密码不一致");
    return;
  } else {
    await registerWithEmail(email.value, password.value);
  }
};

// 表单验证
const formVerify = async () => {
  // 1、邮箱格式校验：是否为空，是否符合邮箱格式。
  // 2、密码格式校验：是否为空，长度是否符合要求。
  // 3、确认密码校验：是否为空，是否与密码一致。
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value !== "") {
    if (reg.test(email.value)) {
      emailWarning.value = "";
    } else {
      emailWarning.value = "请输入正确的邮箱格式";
      return false;
    }
  } else {
    emailWarning.value = "邮箱不能为空";
    return false;
  }
  if (password.value !== "") {
    if (password.value.length >= 6) {
      passwordWarning.value = "";
    } else {
      passwordWarning.value = "密码长度不能小于6";
      return false;
    }
  } else {
    passwordWarning.value = "密码不能为空";
    return false;
  }
  return true;
};
</script>

<style lang="scss" scoped>
// 弹框样式
.form-container {
  width: 320px;
  border-radius: 0.75rem;
  background-color: var(--registerModal--bg); // 更深的背景色
  padding: 2rem;
  color: rgba(229, 231, 235, 1); // 更亮的文字颜色
  position: absolute;
  z-index: 10;
  border: 1px solid rgba(75, 85, 99, 0.5); // 添加边框
}

.title {
  text-align: center;
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 600;
  color: var(--registerModal--main-color); // 紫色标题
}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
  margin-top: 1rem;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid var(--registerModal--input-border);
  outline: 0;
  background-color: var(--registerModal--input-bg); // 输入框深色背景
  padding: 0.5rem 1rem;
  color: var(--registerModal--input-text);
}

.input-group input:focus {
  border-color: var(--registerModal--main-color);
  box-shadow: 0 0 0 3px var(--registerModal--sub-color); // 添加发光效果
}

.forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
  margin: 8px 0 14px 0;
}

.forgot a,
.signup a {
  color: var(--registerModal--input-text);
  text-decoration: none;
  font-size: 14px;
}

.forgot a:hover,
.signup a:hover {
  text-decoration: underline var(--registerModal--main-color);
}

.sign {
  display: block;
  width: 100%;
  background-color: var(--registerModal--main-color);
  padding: 0.5rem 0.75rem;
  text-align: center;
  color: var(--registerModal--button-text);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  &:hover {
    background-color: var(--registerModal--button-hover); // 更深的紫色悬停效果
    transform: translateY(-1px);
  }
}

.social-message {
  display: flex;
  align-items: center;
  padding-top: 1rem;
}

.line {
  height: 1px;
  flex: 1 1 0%;
  background-color: rgba(55, 65, 81, 1);
}

.social-message .message {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(156, 163, 175, 1);
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons .icon {
  border-radius: 0.125rem;
  padding: 0.75rem;
  border: none;
  background-color: transparent;
  margin-left: 8px;
}

.social-icons .icon svg {
  height: 1.25rem;
  width: 1.25rem;
  fill: #fff;
}

.signup {
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
}
// 提示文本样式
.warning-text {
  color: #f53f3f;
  margin: 0.5rem 0;
}
</style>

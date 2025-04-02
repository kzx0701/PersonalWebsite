<template>
  <div class="form-container">
    <div class="w-full flex justify-end relative top-[-1rem] right-[-1rem]">
      <v-icon icon="mdi-close" class="" @click="emit('close')"></v-icon>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="!registerState.loading" class="w-full">
        <p class="title">新用户注册</p>
        <form class="form">
          <div class="input-group">
            <label for="email">邮箱</label>
            <input placeholder="请输入邮箱" v-model="email" id="email" name="email" type="search" autocomplete="email" />
            <div v-if="warningText.email" class="warning-text">{{ warningText.email }}</div>
            <label for="password">密码</label>
            <input placeholder="请输入密码" v-model="password" id="password" name="password" type="password" autocomplete="new-password" />
            <div v-if="warningText.password" class="warning-text">{{ warningText.password }}</div>
            <label for="confirmPassword">确认密码</label>
            <input placeholder="请输入确认密码" v-model="confirmPassword" id="confirmPassword" type="password" autocomplete="new-password" />
            <div v-if="warningText.confirmPassword" class="warning-text">{{ warningText.confirmPassword }}</div>
          </div>
        </form>
        <button style="margin-top: 15%" class="sign" @click="submit">注册</button>
        <div class="social-message">
          <div class="line"></div>
          <p class="message">邮箱方式注册</p>
          <div class="line"></div>
        </div>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="registerState.submit" class="loader-container">
        <transition name="fade" mode="out-in">
          <div v-if="registerState.loading" class="h-full content-center">
            <Loader />
          </div>
          <div v-else-if="registerState.success" class="text-center w-full h-full flex flex-col align-center justify-between">
            <div style="margin-top: 20%">
              <v-icon icon="mdi-check-circle" class="result-icon text-emerald-400"></v-icon>
              <p class="text-emerald-400 font-semibold py-2 text-lg">注册成功</p>
              <div>恭喜您注册成功！您可以通过注册邮箱号码进行登录。</div>
            </div>
            <button style="margin-top: 15%" class="sign" @click="emit('close')">返回登录</button>
          </div>
          <div v-else-if="registerState.fail" class="text-center w-full h-full flex flex-col align-center justify-between">
            <div style="margin-top: 20%">
              <v-icon icon="mdi-close-circle" class="result-icon text-red-400"></v-icon>
              <p class="text-red-400 font-semibold py-2 text-lg">注册失败</p>
              <div>抱歉！您的账号注册失败。失败原因：{{ registerMessage }}</div>
            </div>
            <div style="margin-top: 15%" class="flex gap-4">
              <button class="sign" @click="registerState.submit = false">重新注册</button>
              <button class="sign" @click="emit('close')">返回登录</button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { registerWithEmail } from "../utils/register";
import { nextTick, ref } from "vue";
import Loader from "./Loader.vue";
const emit = defineEmits(["close"]);
// 注册表单数据
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
// 提示文本
const warningText = ref({
  email: "" as string,
  password: "" as string,
  confirmPassword: "" as string,
});
// 注册状态(提交、加载中、成功、失败)
const registerState = ref({
  submit: false as boolean,
  loading: false as boolean,
  success: false as boolean,
  fail: false as boolean,
});
const registerMessage = ref("");

// 提交
const submit = async () => {
  const isValid = await formVerify();
  if (!isValid) {
    return;
  }
  warningText.value = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  // 添加微任务延迟，确保DOM更新
  await nextTick();
  // 添加确认对话框
  const confirmed = window.confirm("确认提交注册信息吗？");
  if (!confirmed) {
    return;
  }
  registerState.value.submit = true;
  registerState.value.loading = true;
  const registerResult = await registerWithEmail(email.value, password.value);
  if (registerResult.res) {
    registerState.value.loading = false;
    registerState.value.success = true;
    registerState.value.fail = false;
  } else {
    registerMessage.value = registerResult.message;
    registerState.value.loading = false;
    registerState.value.fail = true;
    registerState.value.success = false;
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
      warningText.value.email = "";
    } else {
      warningText.value.email = "请输入正确的邮箱格式";
      return false;
    }
  } else {
    warningText.value.email = "邮箱不能为空";
    return false;
  }
  if (password.value !== "") {
    if (password.value.length >= 6) {
      warningText.value.password = "";
    } else {
      warningText.value.password = "密码长度不能小于6";
      return false;
    }
  } else {
    warningText.value.password = "密码不能为空";
    return false;
  }
  if (confirmPassword.value !== "") {
    if (confirmPassword.value != password.value) {
      warningText.value.confirmPassword = "确认密码与密码不一致";
      return false;
    } else {
      warningText.value.confirmPassword = "";
    }
  } else {
    warningText.value.confirmPassword = "确认密码不能为空";
    return false;
  }
  return true;
};
</script>

<style lang="scss" scoped>
// 弹框样式
.form-container {
  width: 22rem;
  border-radius: 0.75rem;
  background-color: var(--registerModal--bg); // 更深的背景色
  padding: 2rem;
  color: rgba(229, 231, 235, 1); // 更亮的文字颜色
  position: absolute;
  z-index: 10;
  box-shadow: 0px 0px 7px #5d5d5d;
  height: 30rem;
  justify-items: center;
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

// 新增加载动画容器样式
.loader-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--registerModal--bg);
  border-radius: 0.75rem;
  padding: 2rem;
}

/* 添加在原有样式后面 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

// 注册结果
.result-icon {
  font-size: 3rem;
}
</style>

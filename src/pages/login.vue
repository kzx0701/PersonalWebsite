<template>
  <div class="login_frame">
      <div class="form_frame">
          <h1 class="title">欢迎登录</h1>
          <div class="group">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024">
          <path
            d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
            fill="currentColor"
          ></path>
        </svg>
        <input class="input" type="text" placeholder="输入用户名" />
      </div>
      <div class="group">
        <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        <input class="input" type="password" placeholder="输入密码" />
      </div>
      <button>
        <span class="text">登录</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
// 背景样式
@keyframes moveBackground {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}
.login_frame {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  background: linear-gradient(135deg, rgba(175, 64, 255, 0.15) 0%, rgba(91, 66, 243, 0.15) 50%, rgba(0, 221, 235, 0.15) 100%);
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.1) 75%,
      transparent 75%,
      transparent
    );
    background-size: 40px 40px;
    animation: moveBackground 30s linear infinite;
    z-index: 0;
  }
  .form_frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 35%;
  }
}

// 输入框样式
.group {
  display: flex;
  line-height: 30px;
  align-items: center;
  position: relative;
  max-width: 300px;
  margin-bottom: 10px;
  animation: titleFadeIn 1s ease-in-out;
  animation-delay: 0.2s;  // 输入框延迟出现
}

.input {
  width: 100%;
  height: 45px;
  line-height: 30px;
  padding: 0 5rem;
  padding-left: 3rem;
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  background-color: #f8fafc;
  color: #0d0c22;
  transition: 0.4s ease;
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
button {
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 120px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 20px;
  z-index: 1;
  animation: titleFadeIn 1s ease-in-out;
  animation-delay: 0.4s;  // 按钮延迟出现
}

button:active,
button:hover {
  outline: 0;
}

button span {
  background-color: rgb(5, 6, 45);
  padding: 12px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

button:hover span {
  background: none;
}

button:active {
  transform: scale(0.9);
}

.title {
  font-size: 2.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, #af40ff, #5b42f3 50%, #00ddeb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(151, 65, 252, 0.2);
  animation: titleFadeIn 1s ease-in-out;
  animation-delay: 0.4s;  // 同步动画
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

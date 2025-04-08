<template>
  <div class="home_frame">
    <div>欢迎回来</div>
  </div>
</template>

<style scoped lang="scss">
.home_frame {
  width: 100%;
  height: 100vh;
  position: relative;
  background: radial-gradient(circle at 10% 20%, rgba(33, 33, 33, 1) 0%, rgba(14, 14, 26, 1) 90%);

  // 添加一些微妙的粒子效果
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 30%, rgba(31, 215, 232, 0.05) 1px, transparent 1px),
      radial-gradient(circle at 80% 70%, rgba(167, 139, 250, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.8;
  }
}
</style>

<template>
    <div class="login_frame">
        <h1>登录页</h1>
        <div class="form_frame">
            <n-input class="mb-2" v-model="username" placeholder="请输入用户名"></n-input>
            <n-input v-model="username" placeholder="请输入用户名"></n-input>
            <n-button type="primary">登录</n-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const username = ref('');
</script>

<style scoped lang="scss">
.login_frame {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .form_frame {
        width: 20%;
    }
}
</style>
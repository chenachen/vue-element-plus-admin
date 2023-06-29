<template>
    <div class="login-container flex-center">
        <div class="form-wrapper shadow-border">
            <div class="form-wrapper__title"> 劈叉后台管理系统 </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.login-container {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);

    .form-wrapper {
        width: 450px;
        height: 500px;
        background-color: var(--bg-color);

        &__title {
            height: 80px;
            line-height: 80px;
            font-size: 26px;

            @apply font-bold text-center;
        }
    }
}
</style>

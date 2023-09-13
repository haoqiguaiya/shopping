<template>
  <div class="login">
    <van-nav-bar
  title="会员登录"
  left-arrow
  @click-left="$router.go(-1)"
/>
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
        </div>

        <div class="form">
        <div class="form-item">
          <input class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
      </div>
    </div>
    </div>
    </template>

<script>
export default {
  name: 'loginIndex'
}
</script>

    <style>

    </style>

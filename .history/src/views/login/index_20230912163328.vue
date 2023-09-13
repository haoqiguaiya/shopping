<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

        <div class="form">
        <div class="form-item">
          <input class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
          <div class="form-item">
          <input class="inp" maxlength="5" placeholder="图形验证码" type="text">
          <img src="@/assets/code.png" alt="">
          <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text">
        </div>
      </div>

      <div class="login-button">登录</div>
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

    <style lang="less" scoped>
.container{
  padding: 49px 29px;
}
.title{
  margin-bottom: 20px;
  h3{
    font-size: 26px;
    font-weight: normal;
  }
  p{
    line-height: 40px;
    font-size: 14px;
    color: #b8b8b8;
  }
}
.form-item{
  border-bottom: 1px solid #f3f1f2;
  padding: 8px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  .inp{
    display: block;
  }
}
    </style>

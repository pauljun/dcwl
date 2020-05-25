<template>
  <div class="login-wrapper">
    <div class="hfx">
      <div :class="loginType === 1 ? 'active':''" @click="loginType = 1">短信登录</div>
      <div :class="loginType === 2 ? 'active':''" @click="loginType = 2">密码登录</div>
    </div>
    <div class="group" v-if="loginType === 1">
      <div class="group-item">
        <el-input class="input" v-model="mobile" placeholder="家长电话" />
      </div>
      <div class="group-item">
        <el-input class="input" v-model="code" placeholder="输入验证码" />
        <span class="code">获取验证码</span>
      </div>
      <el-button class="btn" style="margin-top: 60px;">登录</el-button>
      <p>未注册手机号，完成验证即可注册并登录</p>
    </div>
    <div class="group" v-if="loginType === 2">
      <div class="group-item">
        <el-input class="input" v-model="mobile" placeholder="家长电话" />
      </div>
      <div class="group-item">
        <el-input class="input" v-model="password" placeholder="输入密码" />
      </div>
      <div style="text-align: left; margin-top: 15px">
        <el-checkbox>记住密码</el-checkbox>
      </div>
      <el-button class="btn" style="margin-top: 30px;">登录</el-button>
      <div class="clearfix ps-links">
        <router-link class="fl" to="/user/find-password">找回密码</router-link>
        <router-link class="fr" to="/user/register">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginType: 1,
      mobile: "",
      code: "",
      password: ""
    };
  }
};
</script>

<style lang="less" scoped>
.login-wrapper {
  .group {
    width: 386px;
    margin: 80px auto 0 auto;
  }
  .group-item {
    position: relative;
    &:first-child {
      margin-bottom: 40px;
    }
  }
  .code {
    display: block;
    width: 122px;
    height: 42px;
    line-height: 42px;
    position: absolute;
    right: 10px;
    top: 6px;
    background: rgba(240, 178, 81, 1);
    border-radius: 22px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
  }
  .hfx {
    display: flex;
    height: 68px;
    line-height: 68px;
    font-size: 24px;
    color: #999999;
    background: #f9f9f9;
    & > div {
      flex: 1;
      cursor: pointer;
      &.active {
        background: #fff;
        color: #f0b251;
        font-weight: bold;
      }
    }
  }
  p {
    font-size: 14px;
    color: #666666;
    margin-top: 30px;
  }
}
.ps-links {
  padding: 0 50px;
  margin-top: 20px;
  a {
    color: #666666;
    font-size: 14px;
    text-decoration: underline;
  }
}
</style>
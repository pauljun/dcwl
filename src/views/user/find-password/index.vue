<template>
  <div class="find-psw-wrapper">
    <div class="title">忘记密码</div>
    <div class="group">
      <div class="group-item">
        <el-input class="input" v-model="mobile" placeholder="家长电话" />
      </div>
      <div class="group-item">
        <el-input class="input" v-model="code" placeholder="输入验证码" />
        <span class="code">获取验证码</span>
      </div>
      <div class="group-item">
        <el-input class="input" v-model="password" placeholder="设置新密码" />
      </div>
      <el-button class="btn" style="margin-top: 40px;">完成并登录</el-button>
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
      mobile: "",
      code: "",
      password: ""
    };
  }
};
</script>

<style lang="less" scoped>
.find-psw-wrapper {
  padding-top: 20px;
  .group {
    width: 386px;
    margin: 40px auto 0 auto;
  }
  .group-item {
    position: relative;
    margin-bottom: 25px;
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
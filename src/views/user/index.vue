<template>
  <div class="user-wrapper">
    <router-link class="logo" to="/">
      <img src="../../assets/images/user/logo.png" />
    </router-link>
    <div class="user-container">
      <div class="bg">
        <img width="210" src="../../assets/images/user/logo_bg.png" />
      </div>
      <div class="user-main">
        <router-view></router-view>
      </div>
    </div>
    <div class="user-footer">
      <div class="w1220">
        <div class="fl">
          <router-link to="/about">关于我们</router-link>
          <span>/</span>
          <router-link to="/about/concat">联系我们</router-link>
          <span>/</span>
          <router-link to="/about/promise">我们的承诺</router-link>
          <span>/</span>
          <router-link to="/about/privacy">隐私政策</router-link>
        </div>
        <div class="fr">备案号:粤ICP18141194 深圳市博闻智谷网络科技有限公司</div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.user-wrapper {
  height: 100%;
  background-color: #f7f7f7;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  &:after {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 184px;
    bottom: 52px;
    content: "";
    background: url(../../assets/images/user/foot_bg.png) no-repeat center
      center;
  }
  .logo {
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 1;
  }
  .user-footer {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    height: 52px;
    line-height: 52px;
    background: #292929;
    color: #999;
    font-size: 14px;
    a {
      color: #999;
      font-weight: bold;
    }
    .fl {
      span {
        margin: 0 10px;
      }
    }
  }
  .user-container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 850px;
    height: 512px;
    transform: translate(-50%, -60%);
    background: #fff;
    box-shadow: 0px 12px 24px 2px rgba(240, 178, 81, 0.15);
    border-radius: 16px;
    .bg {
      position: absolute;
      left: -104px;
      top: 0;
      width: 472px;
      height: 512px;
      padding: 135px 0 0 135px;
      background: url("../../assets/images/user/bg.png") no-repeat left -130px;
    }
  }
  .user-main {
    float: right;
    width: 530px;
    text-align: center;
  }
  .title {
    font-weight: bold;
    font-size: 24px;
    color: #f0b251;
  }
}
</style>
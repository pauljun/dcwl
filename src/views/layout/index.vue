<template>
  <div class="layout-wrapper">
    <header>
      <div class="header w1220">
        <img class="logo fl" src="../../assets/images/home/logo.png" />
        <span class="title fl" />
        <div class="fl menu">
          <router-link class="active" to="/">首页</router-link>
          <router-link to="/about">关于我们</router-link>
        </div>
        <div class="fr">
          <router-link to="/login">登录</router-link>
          <router-link to="/register">注册</router-link>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer-view />
  </div>
</template>
<script>
import FooterView from "./footer";
export default {
  components: {
    FooterView,
  },
};
</script>
<style lang="less" scoped>
.layout-wrapper {
  padding-top: 86px;
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    height: 86px;
    background: #fff;
    line-height: 86px;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    .header {
      height: 86px;
      margin: 0 auto;
      .logo {
        margin: 9px 20px 0 0;
      }
      .title {
        width: 137px;
        background: url("../../assets/images/home/title.png") no-repeat right
          center;
        display: block;
        height: 100%;
        position: relative;
        &::after {
          position: absolute;
          left: 0;
          top: 50%;
          content: "";
          width: 2px;
          height: 30px;
          background: #cbcbcb;
          margin-top: -15px;
        }
      }
      .menu {
        margin-left: 120px;
        a {
          color: #333333;
          font-size: 18px;
          margin-right: 70px;
          position: relative;
          &.active {
            color: #f0b251;
            font-weight: bold;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              top: 30px;
              width: 100%;
              height: 4px;
              border-radius: 2px;
              background: #f0b251;
            }
          }
        }
      }
      .fr {
        a {
          display: inline-block;
          width: 112px;
          height: 42px;
          line-height: 38px;
          text-align: center;
          border: 2px solid #f0b251;
          font-size: 18px;
          color: #f0b251;
          border-radius: 20px;
          &:first-child {
            background: #f0b251;
            color: #fff;
            margin-right: 40px;
          }
        }
      }
    }
  }
}
</style>

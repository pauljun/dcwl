<template>
  <div class="about-wrapper w1220">
    <div class="menu-wrap">
      <router-link
        :to="item.path"
        :class="$route.path === item.path ?'active':''"
        v-for="(item,i) in menus"
        :key="i"
      >{{item.name}}</router-link>
    </div>
    <div class="about-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { path: "/about", name: "关于我们" },
        { path: "/about/concat", name: "联系我们" },
        { path: "/about/promise", name: "我们的承诺" },
        { path: "/about/privacy", name: "隐私政策" }
      ]
    };
  }
};
</script>

<style lang="less">
.about-wrapper {
  padding: 40px 0px 40px 0;
  display: flex;
  .menu-wrap {
    width: 200px;
    a {
      display: block;
      font-size: 18px;
      color: #333;
      margin-bottom: 40px;
      padding-left: 30px;
      position: relative;
      font-weight: bold;
      &.active {
        color: #f0b251;
      }
      &.active::after {
        content: "";
        position: absolute;
        left: 0;
        top: 8px;
        width: 0;
        height: 0;
        border-left: 10px solid #f0b251;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-top: 5px solid transparent;
      }
    }
  }
  .about-container {
    flex: 1;
  }
}
</style>

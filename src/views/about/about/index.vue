<template>
  <div class="about-index">
    <div class="ai-1">
      <h3>关于我们</h3>
      <p>
        栋才未来是一家专注于4-12岁少儿数理思维在线教育平
        <br />台，秉承用科技为教育赋能，以创新技术驱动教育升级，
        <br />借助在线直播小班的课堂形式，培训数理素质教育，为
        <br />孩子提供丰富生动的课堂体验。
      </p>
      <img src="../../../assets/images/about/i1.png" />
    </div>
    <div class="ai-2">
      <div class="bg bg1"></div>
      <div>
        <h2>我们的使命</h2>
        <p>
          “栋才未来”通过爱和科技，激发孩子学习兴趣与学习潜
          能，系统化学习与思维能力，培养能够独立思考、独立解
          决问题的“小栋才"，并期望孩子们有一个美好的未来。
        </p>
      </div>
    </div>
    <div class="ai-2">
      <div>
        <h2>我们的愿景</h2>
        <p>
          “栋才未来”希望成为，改变体制化教育的创新教育
          型企业。
        </p>
      </div>
      <div class="bg bg2"></div>
    </div>
    <h4>价值观</h4>
    <div class="ai-3">
      <div>
        <img src="../../../assets/images/about/b1.png" alt />
        <p>以学生为本</p>
      </div>
      <div class="c">
        <img src="../../../assets/images/about/b2.png" alt />
        <p>开放-进取</p>
      </div>
      <div>
        <img src="../../../assets/images/about/b3.png" alt />
        <p>合作-共赢</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about-index {
  .ai-1 {
    height: 264px;
    position: relative;
    padding: 50px 0 0 60px;
    background: linear-gradient(
      90deg,
      rgba(233, 142, 61, 1),
      rgba(246, 192, 94, 1)
    );
    color: #fff;
    img {
      position: absolute;
      right: 50px;
      top: 30px;
    }
  }
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    line-height: 28px;
  }
  .ai-2 {
    display: flex;
    margin-top: 100px;
    .bg {
      height: 292px;
      border-radius: 10px;
      background-color: #eaf3fe;
      background-repeat: no-repeat;
    }
    .bg1 {
      background-image: url("../../../assets/images/about/a1.png");
      background-position: center 5px;
    }
    .bg2 {
      background-image: url("../../../assets/images/about/a2.png");
      background-position: center 50px;
    }

    & > div {
      flex: 1;
      &:first-child {
        margin-right: 48px;
      }
    }
    p {
      line-height: 48px;
      font-size: 18px;
    }
  }
  h2 {
    position: relative;
    font-size: 24px;
    color: #333333;
    line-height: 80px;
    margin-bottom: 20px;
    &::after {
      height: 4px;
      width: 42px;
      background: #f0b251;
      content: "";
      left: 0;
      bottom: 0;
      display: block;
      position: absolute;
    }
  }
  h4 {
    font-size: 24px;
    color: #333333;
    text-align: center;
    position: relative;
    margin: 100px 0 50px 0;
    &::before {
      content: "";
      display: block;
      width: 40px;
      height: 1px;
      background: #b9b9b9;
      left: 50%;
      top: 50%;
      position: absolute;
      margin-left: -100px;
    }
    &::after {
      content: "";
      display: block;
      width: 40px;
      height: 1px;
      background: #b9b9b9;
      left: 50%;
      top: 50%;
      position: absolute;
      margin-left: 60px;
    }
  }
  .ai-3 {
    display: flex;
    & > div:first-child,
    & > div:last-child {
      width: 196px;
      text-align: center;
    }
    .c {
      flex: 1;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: #333333;
      line-height: 80px;
    }
  }
}
</style>

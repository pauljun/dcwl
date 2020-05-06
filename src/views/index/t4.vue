<template>
  <div class="t4 w1220">
    <div class="t4-1">
      <span class="t4-t br16">成长阶段</span>
      <span v-for="i in 5" :class="`br16 l${i}`" :key="i">L{{ i }}</span>
    </div>
    <div class="t4-2">
      <div class="t4-l">
        <div class="t4-t">学习目标</div>
        <div class="t4-t t4-t-g">能力思维培养</div>
        <div class="t4-t">知识模块</div>
        <div class="t4-t">适合学员</div>
      </div>
      <div class="content-bg">
        <div class="flx">
          <span>激发儿童兴趣</span>
          <span>搭建数理基础</span>
          <span>提升思维水平</span>
          <span>强化数理能力</span>
          <span>激发创新思维</span>
        </div>
        <div class="flx-t">
          <span>操作思维，观察力，<br />动手能力</span>
          <span>具体形象思维，表达<br />力，想象力，记忆力</span>
          <span> 抽象逻辑，思维专<br />注力，运算力 </span>
          <span> 思辨性思维，独立<br />思考，判断力 </span>
          <span> 创造性思维，多角度<br />思考力，有创造力 </span>
        </div>
        <div class="flx">
          <span>解决问题能力</span>
        </div>
        <div class="flx-li">
          <span>图形与空间</span>
          <span>数与运算</span>
          <span>逻辑与推理</span>
          <span>综合应用</span>
          <span>思维专项训练</span>
        </div>
        <div class="flx">
          <span>学龄前期</span>
          <span>学龄期</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.t4 {
  .t4-t {
    background: #f4f4f4;
    line-height: 100px;
    height: 100px;
    font-size: 20px;
    color: #333;
    font-weight: bold;
    text-align: center;
    &.t4-t-g {
			height: 216px;
			line-height: 216px;
    }
  }
  .br16 {
    border-radius: 16px 16px 0 0;
  }
  .content-bg {
    background: linear-gradient(
      -90deg,
      rgba(238, 118, 87, 1),
      rgba(245, 183, 87, 1)
    );
  }
  .t4-2 {
    display: flex;
    .content-bg {
      flex: 1;
    }
    .t4-l {
      width: 200px;
      margin-right: 4px;
    }
  }
  .flx {
    display: flex;
    span {
      flex: 1;
      text-align: center;
      border-right: 4px solid #ffd28b;
      border-bottom: 4px solid #ffd28b;
      line-height: 100px;
      font-size: 18px;
      color: #fff;
      &:last-child {
        border-right: 0;
      }
    }
    &:last-child {
      span {
        border-bottom: 0;
      }
    }
  }
  .flx-li {
    display: flex;
    border-bottom: 4px solid #ffd28b;
    padding: 0 80px;
    span {
      text-align: center;
      line-height: 100px;
      font-size: 18px;
      color: #fff;
      flex: 1;
      &:last-child {
        border-right: 0;
      }
    }
  }
  .flx-t {
    display: flex;
    span {
      flex: 1;
      text-align: center;
      border-right: 4px solid #ffd28b;
      border-bottom: 4px solid #ffd28b;
      font-size: 18px;
      height: 100px;
      line-height: 36px;
      padding-top: 12px;
      color: #fff;
      &:last-child {
        border-right: 0;
      }
    }
  }
}
.t4-1 {
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 4px;
  span {
    flex: 1;
    text-align: center;
    margin-right: 4px;
    color: #fff;
    padding-top: 15px;
    font-weight: bold;
    &:last-child {
      margin: 0;
    }
    &:first-child {
      color: #333;
      padding: 0;
    }
  }
  .l1 {
    background: #f5b357;
    height: 100px;
    font-size: 20px;
  }
  .l2 {
    height: 140px;
    background: #f3a757;
    font-size: 24px;
  }
  .l3 {
    height: 180px;
    background: #f29957;
    font-size: 28px;
  }
  .l4 {
    height: 222px;
    background: #f08857;
    font-size: 32px;
  }
  .l5 {
    height: 262px;
    background: #ee7a57;
    font-size: 36px;
  }
}
</style>

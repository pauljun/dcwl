<template>
  <div class="order-wrapper">
    <div class="w1220">
      <h2>我的订单</h2>
      <div class="nav">
        <span :class="active === 1 ? 'active':''" @click="tabChange(1)">全部订单</span>
        <span :class="active === 2 ? 'active':''" @click="tabChange(2)">待支付（1）</span>
        <span :class="active === 3 ? 'active':''" @click="tabChange(3)">已支付</span>
        <span :class="active === 4 ? 'active':''" @click="tabChange(4)">已取消</span>
      </div>
      <div class="list">
        <div class="item">
          <div class="i-header">
            订单编号：
            <span>17283957230876</span>
            <div class="fr">
              下单时间：
              <span>2020-04-12 13:29:30</span>
            </div>
          </div>
          <div class="f-content">
            <div class="title">《课程名称》</div>
            <div class="price">¥16,000</div>
            <div>
              <strong>待支付</strong>
              <br />
              <router-link class="look-detail" :to="`/order/detail/1`">查看详情</router-link>
            </div>
            <div class="pay">
              <router-link to="/order/pay/:id">
                <el-button type="primary">去支付</el-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="no-data">
        <img src="../../assets/images/order/no-data.png" />
        <p>暂时没有课程订单～</p>
        <div>老师会与您尽快取得联系！请耐心等待</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      list: []
    };
  },
  methods: {
    tabChange(active) {
      this.active = active;
    }
  }
};
</script>

<style lang="less">
.order-wrapper {
  padding: 20px 0;
  background: #f7f7f7;
  .w1220 {
    padding: 30px;
    background: #fff;
  }
  h2 {
    font-size: 20px;
    color: #333;
    font-weight: normal;
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e5e5;
  }
  .nav {
    margin: 20px 0;
    span {
      display: inline-block;
      margin-right: 36px;
      cursor: pointer;
      color: #666666;
      font-size: 16px;
      &.active {
        color: #f0b251;
        font-weight: bold;
      }
    }
  }
  .list {
    .item {
      border: 1px solid #e5e5e5;
      .i-header {
        height: 46px;
        line-height: 46px;
        padding: 0 20px;
        background: #f7f7f7;
        color: #666;
        span {
          color: #333333;
          font-weight: bold;
        }
      }
    }
  }
  .f-content {
    display: flex;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 20px 0;
    line-height: 30px;
    & > div {
      flex: 1;
    }
    .title {
      text-align: left;
      padding-left: 20px;
      font-size: 18px;
      color: #333333;
    }
    .price {
      font-size: 18px;
      color: #e13030;
      font-weight: bold;
    }
    strong {
      font-size: 18px;
      color: #f0b251;
    }
    .look-detail {
      color: #666666;
      font-size: 14px;
    }
    button {
      background: #f0b251;
      border-radius: 18px;
      border: 0;
      width: 112px;
      height: 36px;
      font-size: 16px;
    }
    .pay {
      text-align: right;
      padding-right: 30px;
    }
  }
  .no-data {
    padding: 50px 0;
    text-align: center;
    font-size: 16px;
    color: #666;
    p {
      color: #999;
      font-size: 14px;
      margin: 20px 0;
    }
  }
}
</style>
<template>
  <div class="order-detail-wrapper">
    <div class="w1220">
      <div class="title">
        <div class="order">
          订单状态：
          <strong>待支付</strong>
          <div class="fr">
            剩余支付时间：
            <strong>14分30秒</strong>
          </div>
        </div>
        <div class="index">
          订单编号：
          <strong>17283957230876</strong>
          <span>
            下单时间：
            <strong>2020-04-12 13:29:30</strong>
          </span>
        </div>
      </div>
      <div class="content">
        <div class="name">《课程名称》</div>
        <div class="price">
          课程价格：
          <strong>¥16,000</strong>
        </div>
        <div class="number">
          课时数量：
          <strong>80</strong>
        </div>
        <div class="tel">咨询电话：18612252513</div>
      </div>
      <div class="group">
        <router-link class="back" to="/order">返回订单列表</router-link>
        <router-link class="pay" to="/order/pay/1">去支付</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.order-detail-wrapper {
  padding: 20px 0;
  background: #f7f7f7;
  .w1220 {
    padding: 20px 30px;
    background: #fff;
    .title {
      color: #666;
      line-height: 36px;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 20px;
    }
    .order {
      strong {
        color: #f0b251;
      }
    }
    .index {
      strong {
        color: #333;
      }
      span {
        margin-left: 120px;
      }
    }
  }
  .content {
    padding: 30px 0;
    color: #333;
    font-size: 16px;
    .name {
      margin-bottom: 25px;
      font-size: 18px;
    }
    .price {
      margin-bottom: 25px;
      strong {
        color: #e13030;
      }
    }
    .number {
      margin-bottom: 40px;
    }
  }
  .group {
    text-align: center;
    padding: 20px 0;
    .back,
    .pay {
      display: inline-block;
      width: 132px;
      height: 36px;
      text-align: center;
      line-height: 34px;
      border-radius: 18px;
      border: 1px solid #f0b251;
    }
    .back {
      color: #f0b251;
      margin-right: 20px;
    }
    .pay {
      color: #fff;
      background: #f0b251;
    }
  }
}
</style>
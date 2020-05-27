<template>
  <div class="order-pay-wrapper">
    <div class="w1220">
      <div class="title">
        请在
        <strong>2018-04-17 14:30:20</strong>
        前完成支付，超过时间订单将被取消
      </div>
      <div class="number">
        订单编号：
        <strong>17283957230876</strong>
      </div>
      <div class="name">
        《课程名称》
        <span class="fr">¥16,000</span>
      </div>
      <div class="pay-type">
        <span :class="payModel === 'zfb'?'active': ''" @click="payModel ='zfb'">支付宝</span>
        <span :class="payModel === 'wx'?'active': ''" @click="payModel ='wx'">微信支付</span>
      </div>
      <div class="pay-submit">立即支付</div>
      <div class="ft">
        <p>付款遇到问题：</p>
        <p>1.建议您切换到IE浏览器进行支付，如提示“需安装控件”，请按提示进行安装</p>
        <p>
          2.如您无法使用在线支付，可联系客服选择汇款支付。客服电话：
          <strong>18612252513</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payModel: "zfb"
    };
  }
};
</script>

<style lang="less">
.order-pay-wrapper {
  padding: 20px 0;
  background: #f7f7f7;
  .w1220 {
    padding: 20px 30px;
    background: #fff;
    .title {
      font-size: 18px;
      color: #333;
      font-weight: bold;
      padding: 10px 0 30px 0;
      border-bottom: 1px solid rgba(229, 229, 229, 1);
      strong {
        color: #f0b251;
      }
    }
  }
  .number {
    color: #666;
    margin: 30px 0;
    strong {
      color: #333;
    }
  }
  .name {
    height: 64px;
    line-height: 64px;
    padding: 0 20px;
    font-size: 18px;
    background: #f7f7f7;
    span {
      color: #e13030;
      font-weight: bold;
    }
  }
  .pay-type {
    margin: 30px 0;
    span {
      width: 172px;
      display: inline-block;
      height: 62px;
      padding-right: 30px;
      line-height: 60px;
      text-align: right;
      color: #333;
      font-size: 16px;
      border: 1px solid #e5e5e5;
      margin-right: 30px;
      background-repeat: no-repeat;
      background-position: 25px 12px;
      cursor: pointer;
      &:first-child {
        background-image: url("../../assets/images/order/zfb.png");
        background-position: 35px 12px;
      }
      &:last-child {
        background-image: url("../../assets/images/order/wx.png");
      }
      &.active {
        border-color: #f0b251;
      }
    }
  }
  .pay-submit {
    width: 132px;
    height: 36px;
    background: rgba(240, 178, 81, 1);
    border-radius: 18px;
    text-align: center;
    line-height: 34px;
    color: #fff;
    margin: 30px auto;
    font-size: 16px;
    cursor: pointer;
  }
  .ft {
    p {
      color: #333;
      font-size: 16px;
      line-height: 32px;
      &:first-child {
        margin-bottom: 10px;
      }
      strong {
        font-size: 20px;
        color: #f0b251;
      }
    }
  }
}
</style>
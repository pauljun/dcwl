<template>
  <div class="register-wrapper">
    <div class="title">注册</div>
    <div class="group">
      <div class="group-item">
        <el-input class="input" v-model="mobile" placeholder="家长电话" />
      </div>
      <div class="group-item">
        <el-input class="input" v-model="code" placeholder="输入验证码" />
        <span class="code">获取验证码</span>
      </div>
      <div class="agree">
        <el-checkbox v-model="isAgree" />&#x3000;我已阅读并同意
        <span @click="look(1)">《栋才未来用户协议》</span>和
        <span @click="look(2)">《隐私政策》</span>
      </div>
      <el-button @click="register" class="btn" :disabled="!isAgree">注册并登录</el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible" class="register-dialog-wrapper" width="60%">
      <div class="register-dialog" v-if="type === 2">
        <h2>隐私政策</h2>
        <h3>栋才未来隐私政策</h3>
        <div>
          引言
          <br />深圳博文智谷有限公司（以下称“栋才未来”或“我们”）非常重视用户个人信息的保护。您在下载、开启、浏览、注册、登录、使用“栋才未来”相关网站、
          软件及相关产品和/或服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，我们将如何收集、使用、储存和分享这些信息，
          以及我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与您所使用的栋才未来产品和/或服务息息相关，希望您仔细阅读，在需要时，
          按照本《隐私政策》的指引，作出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们尽量使用简明扼要的表述，以便您的理解。
          <br />如果您不同意本《隐私政策》的任何内容，我们将无法为您提供产品和/或服务，您应立即停止使用我们的产品和/或服务。您使用我们的产品和/或服务，即意
          味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。当本《隐私政策》进行更新后，我们会及时在栋才未来平台发布最新版本。如对本
          《隐私政策》或相关事宜有任何问题，您可以通过栋才未来网站（www.栋才未来.com）首页的客服热线或者在线咨询与我们联系。
          <br />本《隐私政策》包含以下内容：
          <br />1.我们可能收集的信息
          <br />2.我们如何存储您的信息
          <br />3.我们如何使用Cookie和同类技术
          <br />4.我们如何使用信息
          <br />5.您如何访问和控制自己的个人信息
          <br />6.我们如何共享信息
          <br />7.信息安全
          <br />8.您分享的信息
          <br />9.广告服务
          <br />10.我们可能向您发送的邮件和信息
          <br />
        </div>
      </div>
      <div class="register-dialog" v-if="type ===  1">
        <h2>栋材未来用户协议</h2>
        <h3>栋才未来用户注册协议</h3>
        <div>
          1. 特别提示
          <br />1.1 栋才未来同意按照本用户注册协议（以下称“本协议”）的规定及其不时发布的操作规则提供基于互联网以及移动网的相关服务（以下称“网络服务”），
          为获得网络服务，服务使用人（以下称“用户”）应当同意本协议的全部条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击“同意”
          按钮即表示用户完全接受本协议项下的全部条款。未成年人用户请在父母或监护人陪同下阅读本协议，并在提交个人信息之前寻求父母或监护人的同意和指导。
          <br />1.2 用户注册成功后，栋才未来将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事
          件负法律责任。
          <br />1.3 用户注册成功，栋才未来 将会向每位注册用户拨打电话进一步介绍本公司的相关服务情况。用户的注册行为即视同为同意接受公司进一步的电话服务。
          2. 服务内容
          <br />2.1 栋才未来网络服务的具体内容由栋才未来根据实际情况提供，例如1对1在线课程、1对多公开课程、论坛、基于微信服务号的各类服务等。
          <br />2.2 栋才未来提供的部分网络服务（例如1对1在线课程，1对多公开课程等）为收费的网络服务，用户使用收费网络服务需要向栋才未来支付一定的费用。对于
          收费的网络服务，栋才未来会在用户使用之前给予用户明确的提示，只有用户根据提示确认其愿意支付相关费用，用户才能使用该等收费网络服务。如用户拒绝
          支付相关费用，则栋才未来有权不向用户提供该等收费网络服务。
          <br />2.3 用户理解，栋才未来仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需
          的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。
          <br />3. 服务变更、中断或终止
          <br />3.1 鉴于网络服务的特殊性，用户同意栋才未来有权随时变更、中断或终止部分或全部的网络服务（包括收费网络服务）。如变更、中断或终止的网络服务属于
          免费网络服务，栋才未来无需通知用户，也无需对任何用户或任何第三方承担任何责任；如变更、中断或终止的网络服务属于收费网络服务，栋才未来应当在变
          更、中断或终止之前事先通知用户，并应向受影响的用户提供等值的替代性的收费网络服务，如用户不愿意接受替代性的收费网络服务，就该用户已经向栋才未
          来支付的服务费，栋才未来应当按照该用户实际使用相应收费网络服务的情况扣除相应服务费之后将剩余的服务费退还给该用户。
          <br />
        </div>
      </div>
    </el-dialog>
    <div class="dialog-success" v-if="type === 3">
      <div class="dialog-success-container">
        <img src="../../../assets/images/user/success.png" />
        <div class="content">
          注册并领取成功
          <br />顾问老师会尽快与您取得联系
        </div>
        <p>
          <span>{{number}}S</span>后将跳转到登录成功页面
        </p>
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
      dialogVisible: false,
      type: null,
      isAgree: false,
      number: 5
    };
  },
  methods: {
    look(type) {
      this.type = type;
      this.dialogVisible = true;
    },
    register() {
      this.type = 3;
      let timer = setInterval(() => {
        this.number--;
        if (this.number === 0) {
          clearInterval(timer);
          this.$router.push("/user/login");
        }
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.register-wrapper .title {
  padding-top: 30px;
}
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
.agree {
  font-size: 14px;
  margin-top: 16px;
  span {
    cursor: pointer;
    color: #f0b251;
  }
}

.register-dialog {
  text-align: left;
  margin-top: -20px;
  line-height: 28px;
  h2 {
    font-size: 22px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 20px;
  }
  h3 {
    color: #333;
  }
}
.dialog-success {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  z-index: 9999;
}
.dialog-success-container {
  width: 650px;
  height: 380px;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-top: -190px;
  margin-left: -325px;
  padding-top: 50px;
  .content {
    font-size: 20px;
    color: #333;
    text-align: center;
    line-height: 36px;
    margin: 30px 0 50px 0;
  }
  p {
    color: #666;
    font-size: 18px;
    span {
      font-size: 32px;
      color: #f0b251;
      margin-right: 20px;
      font-weight: bold;
    }
  }
}
</style>
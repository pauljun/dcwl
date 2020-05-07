<template>
  <div class="t5-container w1220">
    <div class="t5-1" style="width: 622px;height: 622px;">
      <div class="t5-c1 t5-c">
        筛选简历
      </div>
      <div class="t5-c2 t5-c">
        基础面试
      </div>
      <div class="t5-c3 t5-c">
        背景调查
      </div>
      <div class="t5-c4 t5-c">
        <div class="t5-c4-b"></div>
        模拟课面试
      </div>
      <div class="t5-c5 t5-c">
        信息审核
      </div>
      <div class="t5-1">
        <div class="t5-1">
          <div class="t5-1-2">
            <div class="t5-1-3"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="t5-main">
      <h2>师资力量</h2>
      <h3>
        教师及教研团队都具备多年的数学思维启
        蒙、教育学及儿童发展心理学教育教学经 验，筛选通过率不高于10%，全员持有老
        师资格证。
      </h3>
      <h3>严格的选拔制度，让教学品质更有保障。</h3>
    </div>
  </div>
</template>

<style lang="less">
.t5 {
  height: 960px;
  padding-top: 104px;
  background: #f7fafb url("../../assets/images/home/t5-1.png") no-repeat right
    bottom;
  .t5-container {
    position: relative;
    padding-left: 80px;
  }
  .t5-1 {
    border: 2px solid rgba(240, 178, 81, 1);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    padding: 50px;
    position: relative;
  }
  .t5-main {
    position: absolute;
    right: 0;
    width: 380px;
    top: 150px;
    text-align: left;
    h2 {
      width: 160px;
      text-align: left;
      &::after {
        left: 0;
        margin-left: 0;
      }
    }
    h3 {
      line-height: 32px;
      text-align: left;
    }
  }
  .t3-title {
    margin-top: 100px !important;
  }
  .t5-1-2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 36px;
    background: #f5e4c8;
  }
  .t5-1-3 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #f1bc69 url("../../assets/images/home/t5-2.png") no-repeat
      center bottom;
  }
  .t5-c {
    position: absolute;
    text-align: center;
    font-size: 18px;
    color: rgba(102, 102, 102, 0.8);
    z-index: 1;
  }
  .t5-c1 {
    padding-top: 130px;
    width: 126px;
    left: 100px;
    top: -20px;
    background: url("../../assets/images/home/c1.png") no-repeat center top;
  }
  .t5-c2 {
    width: 108px;
    padding-top: 118px;
    right: 56px;
    top: 90px;
    background: url("../../assets/images/home/c2.png") no-repeat center top;
  }
  .t5-c3 {
    width: 126px;
    padding-top: 130px;
    right: -10px;
    bottom: 80px;
    background: url("../../assets/images/home/c3.png") no-repeat center top;
  }
  .t5-c4 {
    width: 126px;
    left: 236px;
    bottom: -30px;
    .t5-c4-b {
      width: 104px;
      height: 104px;
      margin: 0 auto;
      border: 10px solid #d4e9f4;
      border-radius: 50%;
      background: #59b2e0 url("../../assets/images/home/c4.png") no-repeat
        center center;
      margin-bottom: 5px;
    }
  }
  .t5-c5 {
    width: 126px;
    padding-top: 119px;
    left: 20px;
    top: 300px;
    background: url("../../assets/images/home/c5.png") no-repeat center top;
  }
}
</style>

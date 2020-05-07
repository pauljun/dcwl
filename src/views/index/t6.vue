<template>
  <div class="t6">
    <h2>如何试听</h2>
    <h3>简单三步开启精彩</h3>
    <div class="w1220">
      <el-row :gutter="60">
        <el-col :span="8">
          <div class="t6-item t6-item1">
            <div class="icon"></div>
            <div class="tlt">免费领取试听</div>
            <p>
              免费领取价值299元试听课体验<br />
              注册后我们会及时和您联系
            </p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="t6-item t6-item2">
            <div class="icon"></div>
            <div class="tlt">免费领取试听</div>
            <p>专属顾问会给您对话安排上课</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="t6-item t6-item3">
            <div class="icon"></div>
            <div class="tlt">免费领取试听</div>
            <p>我们会及时和跟进安排协助您上课</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
.t6 {
  padding: 50px 0;
  text-align: center;
  p {
    font-size: 18px;
    color: #333333;
    line-height: 28px;
    height: 56px;
  }
  .icon {
    width: 156px;
    height: 156px;
    margin: 0 auto;
    border: 2px solid rgba(238, 238, 238, 1);
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .tlt {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    height: 80px;
    line-height: 84px;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 30px 0;
  }
  .t6-item {
    padding: 60px 0 40px 0;
    &:hover {
      box-shadow: 0px 0px 6px 2px rgba(240, 178, 81, 0.15);
      border-radius: 8px;
    }
  }
  .t6-item1 {
    .icon {
      background-image: url("../../assets/images/home/t6_1.png");
    }
    .tlt {
      background-image: url("../../assets/images/home/n1.png");
    }
  }
  .t6-item2 {
    .icon {
      background-image: url("../../assets/images/home/t6_2.png");
    }
    .tlt {
      background-image: url("../../assets/images/home/n2.png");
    }
  }
  .t6-item3 {
    .icon {
      background-image: url("../../assets/images/home/t6_3.png");
    }
    .tlt {
      background-image: url("../../assets/images/home/n3.png");
    }
  }
}
</style>

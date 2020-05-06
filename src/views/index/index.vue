<template>
  <div class="index-wrapper">
    <div class="index-container w1220">
      <div class="y1"></div>
      <div class="y2"></div>
      <div class="pr">
        <div class="n">适合4-12岁孩子</div>
        <div class="t">儿童数理思维直播课</div>
        <div class="t1">
          <span>专注儿童数学思维能力培养</span>
          <span>小班在线教学，趣味互动</span><br />
          <span>让孩子不止步于学知识，更学会思考</span>
        </div>
        <div class="c">
          <div class="c1">限时免费</div>
          <div class="c2">
            领取<span>298</span>元精品试听课                
          </div>
          <div class="c3">
            <el-input v-model="phone" placeholder="请输入手机号"></el-input>
            <el-button type="primary" round>立即领取</el-button>
            <p>栋材未来会保护您的隐私</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>数学思维</h2>
      <h3>游戏互动多感官情景课堂，激发学习力</h3>
      <div class="t2 w1220">
        <ul class="clearfix">
          <li v-for="(v, i) in mathList" :key="i">
            <div
              :style="{
                backgroundImage: `url(/static/images/home/t${i + 1}.png)`,
              }"
            />
            <p>{{ v }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="t3">
      <h2>为什么选我们</h2>
      <div class="w1220 t3-content">
        <div v-for="(v, i) in t3List" :key="i">
          <div
            class="icon"
            :style="{
              backgroundImage: `url(/static/images/home/a${i + 1}.png)`,
            }"
          ></div>
          <h4>{{ v.h4 }}</h4>
          <h5>{{ v.h5 }}</h5>
        </div>
      </div>
      <div class="t3-title">领取试听</div>
      <h2>教学大纲</h2>
      <h3>素质教育，让学习事半功倍</h3>
      <tfour />
      <div class="t3-title">领取试听</div>
    </div>
  </div>
</template>

<script>
import Tfour from './t4';
export default {
  components: {
    Tfour
  },
  data() {
    return {
      mathList: [
        "培养孩子观察性思维能力",
        "培养孩子分析性思维能力",
        "培养孩子判断性思维能力",
        "培养孩子动手协调能力",
        "培养孩子知识记忆能力",
        "互动游戏教学，让孩子从此爱上学习",
      ],
      t3List: [
        { h4: "严格的老师筛选标准", h5: "理解儿童各个年龄段心理特点" },
        { h4: "沉浸式课堂体验", h5: "精品小班在线直播教学" },
        { h4: "游戏互动情景教学", h5: "让孩子爱上学习" },
        { h4: "立体化多环节教学", h5: "课堂-练习-测评三环保证学习效果" },
      ],
      phone: ''
    };
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>

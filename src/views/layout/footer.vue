<template>
  <div class="footer">
    <div class="footer-1 w1220">
      <div>
        <h3>客服电话</h3>
      </div>
      <div>
        <h3>公司信息</h3>
      </div>
      <div>
        <h3>关注我们</h3>
      </div>
    </div>
    <div class="footer-2">
      <p>备案号:粤ICP18141194 深圳市博闻智谷网络科技有限公司</p>
      <p>网站所有图片、文字未经许可不得拷贝、复制。</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  background: #525252;
  .footer-1 {
		padding: 50px 0;
		color: #fff;
    display: flex;
    & > div {
			flex: 2;
			&:nth-child(2){
				flex: 3;
				position: relative;
			}
		}
		h3{
			position: relative;
			font-size: 18px;
			&::after{
				display: block;
				width: 28px;
				height: 2px;
				content: "";
				background: #F0B251;
				margin-top: 12px;
			}
		}
  }
  .footer-2 {
    height: 68px;
    background: #292929;
    color: #999;
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    padding-top: 10px;
  }
}
</style>

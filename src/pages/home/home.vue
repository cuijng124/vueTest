<template>
	<div class="home">
      <header-bar></header-bar>
      <div class="contentArea">
          <slider></slider>
          <Classification></Classification>
          <Product></Product>
      </div>
      <!--<Scroll></Scroll>-->
      <!--<Footer-bar></Footer-bar>-->
      <mt-tabbar  fixed class="footer">
        <mt-tab-item id="列表" href="/">
         列表
        </mt-tab-item>
        <mt-tab-item id="我的" href="/#/mine">
          我的
        </mt-tab-item>
      </mt-tabbar>
	</div>
</template>
<script>
import HeaderBar from '../../components/header.vue'
import Slider from '../../components/slider.vue'
import Product from '../../components/product.vue'
import Classification from '../../components/classification.vue'
// import Scroll from '../../components/scroll.vue'
// import FooterBar from '../../components/footer.vue'
import { Tabbar, TabItem } from 'mint-ui';

export default {
  components: {
    HeaderBar,
    Slider,
    Product,
    Classification
    // Scroll,
    // FooterBar
  }
}
</script>

<style lang="">
  html,body{
    height:100%;
    position: relative;
    overflow: scroll;
  }
  .home{
    position: relative;
  }
  .contentArea{
    position: absolute;
    width: 100%;
    height: 100%;
    top:44px;
    bottom:40px;
  }
  .footer a{
    padding: 10px 0;
    color:#ccc;
  }
</style>

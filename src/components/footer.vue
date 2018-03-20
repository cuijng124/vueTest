<template>
	<!--<div class="db_footer">
        <a href="/">列表</a>
        <a href="/#/mine">我的</a>
	</div>-->
  <mt-tabbar  fixed="true">
    <mt-tab-item id="列表">
      <a href="/">列表</a>
    </mt-tab-item>
    <mt-tab-item id="我的">
      <a href="/#/mine">我的</a>
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
  import { Tabbar, TabItem } from 'mint-ui';

</script>

<style lang="">
    .db_footer{
        z-index: 2;
        display: -webkit-box;
        width: 100%;
        height: 40px;
        border-top: 1px solid #ccc;
        background: #fff;
        position: absolute;
        bottom:0;
    }
    .db_footer a{
        display: -webkit-box;
        -webkit-box-flex: 1;
        -webkit-box-align: center;
        -webkit-box-pack: center
    }
    .db_footer a:first-child{
        border-right: 1px solid #ccc;
    }
</style>
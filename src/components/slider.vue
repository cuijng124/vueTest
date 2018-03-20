<template>
  <div class="db_swiper">
    <swiper :options="swiperOption"  ref="mySwiper">
		  <swiper-slide v-for="slide in sliders" :key = "slide.id">
		  	<a :href="slide.url" target="_blank"><img :src="slide.img"></a>
		  </swiper-slide>
		  <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
  </div>
</template>
<script>
	import { swiper, swiperSlide} from 'vue-awesome-swiper'
	require('swiper/dist/css/swiper.css')
	export default {
		data () {
			return {
				swiperOption: {
					// notNextTick:false,
					initialSlide: 1,
					autoplay: 5000,
					loop: true,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					observeParents: true
				},
				sliders:[
					{
						"id":0,
						"img": "https://img1.doubanio.com/dae/niffler/niffler/images/840272f4-2918-11e8-b807-0242ac110018.jpg",
						"url": "www.baidu.com"
					},
					{
						"id":1,
						"img": "https://img3.doubanio.com/dae/niffler/niffler/images/c03fb02a-245d-11e8-b3b8-0242ac110015.jpg",
						"url": "www.baidu.com"
					},
					{
						"id":2,
						"img": "https://img3.doubanio.com/dae/niffler/niffler/images/b7e73bb4-21bf-11e8-9750-0242ac11004e.jpg",
						"url": "www.baidu.com"
					},
					{
						"id":3,
						"img": "https://img3.doubanio.com/dae/niffler/niffler/images/e59b56b4-2460-11e8-b51d-0242ac110020.jpg",
						"url": "www.baidu.com"
					},
					{
						"id":4,
						"img": "https://img3.doubanio.com/dae/niffler/niffler/images/7eedab32-2461-11e8-a76b-0242ac110035.jpg",
						"url": "www.baidu.com"
					}
				]
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            this.swiper.slideTo(0, 0, false);  
        } 
		
	}
</script>
    
<style lang="">
	.db_swiper .swiper-slide{
		height:165px;
		background-color: #e0e0e0;
	}
	.db_swiper .swiper-slide img{
		width: 100%;
		height: 100%;
	}
</style>
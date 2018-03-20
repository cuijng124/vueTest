<template>
    <div class="product main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
      <h3>TOP250</h3>
        <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore"> 
          <div class="productDetailContent" v-for='product in products'>
            <figure :subjectId="product.id" @click="subject(product.id)">
              <div class="productPicture" >
                <div class="defaultImage defaultImageNone">
                  <img v-lazy="product.images.medium">
                </div>
              </div>
              <article>
                <p class="productName">{{product.title}}</p>
              </article>
            </figure> 
          </div>
        </v-loadmore>
    </div>
</template>

<script>
  import axios from 'axios';
  import router from '../router';
  import { Loadmore } from 'mint-ui';
  import { Lazyload } from 'mint-ui';
  export default {
    data(){
        return {
            products:[],
            subjectId:"",
            scrollMode:"auto",
			allLoaded: false
        }
    },
    components: {  
      	'v-loadmore':Loadmore
    },
    mounted(){  
		this.loadBottom();  //初次访问查询列表  
		this._start = 0
    }, 
    methods: {
		subject:function(id) {
			router.push({ name: 'Subject', params: { id: id } });
		},
		loadBottom:function() {
			this.$refs.loadmore.onBottomLoaded();
			this.loadPageList();
		},
		loadPageList:function (){
			this.$ajax({
				method: 'POST',
				async:false,
				dataType : "jsonp",
				url:'/movie/top250',
				data:{start:this._start}
			})
			.then(response => {
				this.products.push(...response.data.subjects)
				this._start= 20+this._start
			})
			.catch(function (error) {
				console.log(error);
			})
		} 
    }
  }
</script>
<style lang="">
  .product{
    width: 100%;
    padding-bottom: 32px;
    box-sizing: border-box;
  }
  .product h3{
    width: 100%;
    height: 40px;
    text-indent: 14px;
    line-height: 40px;
    font-size: 16px;
    color: #555555;
    text-align: left;
    display: block;
    border-bottom:1px solid #ccc
  }
  .productDetailContent{
    width: 100%;
  }
  .productDetailContent figure{
    width:50%;
    float: left;
    /*height: 11rem;*/
    overflow: hidden;
    margin: 10px 0
  }
  .productPicture{
    width: 100%;
    height: 4rem;
    overflow: hidden
  }
  .productPicture img{
    width: 54%;
  }
  article{
    overflow: hidden;
    margin: 0 auto;
    padding: 0.3rem 0.6rem 0;
    background: #fff
  }
  .productPicture img[lazy=loading] {
    width: 50%;
    background: #ccc
  }
</style>
<template>
    <div class="classification">
        <div v-for="list in lists" v-bind:style="{color:list.color,border:+'1px solid'+ list.color}">
            {{list.title}}
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            lists:[
                {
                    title:"正在热映",
                    color:"rgb(35, 132, 232)"
                },
                {
                    title:"即将上映",
                    color:"rgb(230, 70, 126)"
                },
                {
                    title:"Top250",
                    color:"rgb(159, 120, 96)"
                },
                {
                    title:"口碑榜",
                    color:"rgb(225, 100, 77)"
                },
                {
                    title:"北美票房榜",
                    color:"rgb(122, 106, 219)"
                },
                {
                    title:"新片榜",
                    color:"rgb(42, 184, 204)"
                },
            ]
        }
    }
}
</script>
<style>
    .classification{
        display: -webkit-flex; 
        display: flex;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        /* flex-direction:column;*/
        flex-wrap: wrap; 
        justify-content: space-around;
        padding: 0.4rem 0;
        border-bottom:1px solid #ccc
    }
    .classification div{
        line-height: 1rem;
        width: 3rem;
        height: 1rem;
        border-radius: 4px;
    }
</style>

<template>
    <div>
        <h3>
            {{subject.title}}{{subject.original_title}}
        </h3>
        <p>导演{{subject.directors[0].name}}</p>
        <p>
            主演
            <span v-for="cast in subject.casts">
                {{cast.name}}/
            </span>
        </p>
        <p>
            
        </p>
        <p>
            类型
            <span v-for="genre in subject.genres">
                {{genre}}/
            </span>
        </p>
        <p>上映日期{{subject.year}}</p>
        <span>
            {{subject.ratings_count}}人评价
        </span>
        <p>
            影片介绍
            {{subject.summary}}
        </p>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                subject:[],
                id:''
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.$ajax({
                method: 'POST',
                async:false,
                dataType : "jsonp",
                url:'/movie/subject/'+this.id,
                data:{}
            })
            .then(response => {
                console.log(typeof response)
                console.log(response)
                this.subject=response.data
                console.log(this.subject)
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        methods: {

        }
    }
</script>
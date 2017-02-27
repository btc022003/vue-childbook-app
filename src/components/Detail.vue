<template>
    <div class="article" v-html='article.content'>
    </div>
</template>
<script>
import api from '../services/api'
export default{
    data(){
        return{
            article:{},
            id:0
        }
    },
    created(){
        this.id = this.$route.query.id //获取参数id
        this.getData()
    },
    watch:{
        $route:function(){
            this.getData()
        }
    },
    methods:{
        getData:function(){
            api.getDetailById(this.id,function(data){
                this.article = data.data
            }.bind(this))
        }
    }
}
</script>
<style>
.article{
    padding:10px;
}
.article img{
    max-width:100%;
}
.bdsharebuttonbox{
    display:none;
}
</style>

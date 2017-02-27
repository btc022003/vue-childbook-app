<template>
    <div class="list">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <template v-for="item in books">
            <a :href="'#/detail?id='+item.id" class="mint-cell">
                <span class="mint-cell-mask"></span>
                <div class="mint-cell-left"></div>
                <div class="mint-cell-wrapper">
                    <div class="mint-cell-title"><!---->
                        <span class="mint-cell-text">{{item.title}}</span> <!---->
                    </div>
                    <div class="mint-cell-value is-link">
                        <span></span>
                    </div>
                </div>
                <div class="mint-cell-right"></div>
                <i class="mint-cell-allow-right"></i>
            </a>
            </template>
        </mt-loadmore>
    </div>
</template>

<script>
    import api from '../services/api'
    export default {
        name: 'hello',
        data () {
            return {
                allLoaded:false,
                title:'',
                pageIndex:1,
                pageCount:1,
                books:[]
            }
        },
        methods:{
            loadTop:function(){

            },
            loadBottom:function(){
                //当页码大于最大页数时,加载完成
                if(this.pageIndex >= this.pageCount){
                    this.allLoaded = true
                }
                this.pageIndex += 1
                this.getData(this.pageIndex,this.title)
                this.$refs.loadmore.onBottomLoaded()
            },
            getData:function(page,title){
                api.getDataByPage(this.pageIndex,this.title,function(data){
                    this.books = this.books.concat(data.data)
                    this.pageCount = data.total_pages
                }.bind(this))
            }
        },
        created:function(){
            this.getData(this.page,this.title)
        }
    }
</script>
<style>
.list ul{
    margin-top:46px;
}
.list ul li{
    list-style:none;
    line-height:24px;
}
a{
    color:#333;
    text-decoration:none;
}
</style>

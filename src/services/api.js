import axios from 'axios'
export default{
    //根据页码和查询关键字获取列表数据
    getDataByPage(page,title,callback){
        axios.get('http://penkuoer.com/api/v1/book/get_books_by_page.json',{
            params:{
                page:page,
                title:title
            }
        }).then(res=>{
            callback(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },
    //根据id获取详情
    getDetailById(id,callback){
        axios.get('http://penkuoer.com/api/v1/book/get_book_detail.json',{
            params:{
                id:id
            }
        }).then(res=>{
            callback(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
}

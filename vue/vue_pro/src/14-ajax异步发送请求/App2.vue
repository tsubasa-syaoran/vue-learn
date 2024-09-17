<template>
  <div>
    <BugHeader @saveBugObjCallBack="saveBugObjCallBack"></BugHeader>

    <BugList :bugList="bugList" 
      @selectAllCallBack="selectAllCallBack"
        ></BugList>
    <BugFooter :bugList="bugList" @clearSolvedCallBack="clearSolvedCallBack"></BugFooter>
  </div>
</template>

<script>

import pubsub from 'pubsub-js'
import BugHeader from './components/BugHeader.vue'
import BugList from './components/BugList.vue'
import BugFooter from './components/BugFooter.vue'
import axios from 'axios'

export default {
  name: 'App',
   data(){
        return{
            bugList:[]
        }
    },
    mounted(){
      // axios.get('/api/vue/bugs').then(
      //   response =>{
      //     console.log('响应数据:',response.data)   
      //     this.bugList = response.data     
      // },
      //   error => {
      //     console.log('错误信息为:',error.message)
      //   }
      // )

     console.log(this)
     this.$http.get('/api/vue/bugs').then(
        response =>{
          console.log('响应数据:',response.data)   
          this.bugList = response.data     
      },
        error => {
          console.log('错误信息为:',error.message)
        }
      )


      // 发送ajax 请求
      // 向全局事件总线对象上绑定事件
        // this.$bus.$on('modifyResolvedCallBack',this.modifyResolvedCallBack)
        // this.$bus.$on('deleteByIdCallBack',this.deleteByIdCallBack)
        // this.$bus.$on('updateDescCallBack',this.updateDescCallBack)

        this.pid1 = pubsub.subscribe('modifyResolvedCallBack',this.modifyResolvedCallBack)
        this.pid2 = pubsub.subscribe('deleteByIdCallBack',this.deleteByIdCallBack)
        this.pid3 = pubsub.subscribe('updateDescCallBack',this.updateDescCallBack)

    },
    beforeDestroy(){
        pubsub.unsubscribe(pid1)
        pubsub.unsubscribe(pid2)
        pubsub.unsubscribe(pid3)
      //  this.$bus.$off(['modifyResolvedCallBack','deleteByIdCallBack','updateDescCallBack'])
    },
    methods:{
      saveBugObjCallBack(bugObj){
        this.bugList.unshift(bugObj)
      },
     modifyResolvedCallBack(messageName,bugId){
        this.bugList.forEach((bug)=>{
           if(bug.id == bugId){
            bug.resolved = !bug.resolved
           } 
        })
     },
     deleteByIdCallBack(messageName,bugId){
        this.bugList = this.bugList.filter((bug)=>{
          return bug.id !== bugId
        })
     },
     selectAllCallBack(flag){
          this.bugList.forEach((bug)=>{
           bug.resolved = flag
      })
     },
     clearSolvedCallBack(){
        this.bugList = this.bugList.filter((bug) => {
          return !bug.resolved
        })
     },
     updateDescCallBack(messageName,bugObj){
            this.bugList.forEach((bug) => {
                if(bug.id === bugObj.id){
                   bug.desc = bugObj.desc
                   return 
                }
            })
     }
    },
    components:{
    BugHeader,BugList,BugFooter
  },
}
</script>

<style>
 .button{
   display: inline-block;
   *display: inline;
   zoom:1;
   padding: 6px 20px;
   margin: 0;
   cursor : pointer;
   border : 1px solid #bbb;
   overflow:visible;
   font: bold 13px arial,helvetica, san-serif;
   text-decoration: none;
   white-space:nowrap;
   color: #555;
   background-color: #ddd;
   background-image: -webkit-gradient(linear,to right top, to right bottom,from (rgba(255,255,255,1)), to(rgba(255,255,255,0)));
   background-image: -webkit-linear-gradient(to bottom,rgba(255,255,255,1),rgba(255,255,255,0));
   background-image: -moz-linear-gradient(to bottom,rgba(255,255,255,1),rgba(255,255,255,0));
   background-image: -ms-linear-gradient(to bottom,rgba(255,255,255,1),rgba(255,255,255,0));
   background-image:-o-linear-gradient(to bottom,rgba(255,255,255,1),rgba(255,255,255,0));
   background-image:linear-gradient(to bottom,rgba(255,255,255,1),rgba(255,255,255,0));
   -webkit-transition: background-color .2s ease-out;
   -moz-transition: background-color .2s ease-out;
   -ms-transition: background-color .2s ease-out;
   -o-transition: background-color .2s ease-out;
   transition: background-color .2s ease-out;
   background-clip: padding-box;
   -moz-border-radius: 3px;
   -webkit-border-redius: 3px;
   border-radius: 3px;
   -moz-box-shadow: 0 1px 0 rgba(0,0,0,.3), 0 2px 2px -1px rgba(0,0,0,.5) , 0 1px 0 rgba(255,255,255,.3) inset; 
   -webkit-box-shadow: 0 1px 0 rgba(0,0,0,.3), 0 2px 2px -1px rgba(0,0,0,.5), 0 1px 0 rgba(255,255,255,.3) inset;
   box-shadow:0 1px 0  rgba(0,0,0,.3), 0 2px 2px -1px rgba(0,0,0,.5), 0 1px rgba(255,255,255,.3) inset;
   text-shadow:0 1px 0  rgba(0,0,0,.3), 0 2px 2px -1px rgba(0,0,0,.5), 0 1px rgba(255,255,255,.3) inset;
   -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
 }
 .button:active{
  background: #e9e9e9;
  position: relative;
  top: 1px;
  text-shadow: none;
  -moz-box-shadow: 0 1px 1px rgba(0,0,0,.3) inset;
  -webit-box-shadow: 0 1px 1px rgba(0,0,0,.3) inset;
  box-shadow: 0 1px 1px rgba(0,0,0,.3) inset;
 }
 .button.red{
  color:#fff;
  text-shadow: 0 1px 0 rgba(0,0,0,.2);
  background-image: -webkit-gradient(linear,to right top, to right bottom,from (rgba(255,255,255,.3)), to(rgba(255,255,255,0)));
  background-image: -webkit-linear-gradient(to bottom, rgba(255,255,255,.3),rgba(255,255,255,0));
  background-image: -moz-linear-gradient(to bottom, rgba(255,255,255,.3),rgba(255,255,255,0));
  background-image: -ma-linear-gradient(to bottom, rgba(255,255,255,.3),rgba(255,255,255,0));
  background-image: -o-linear-gradient(to bottom, rgba(255,255,255,.3),rgba(255,255,255,0));
  background-image: linear-gradient(to bottom, rgba(255,255,255,.3),rgba(255,255,255,0));
 }
 .button.red{
  background-color: #ca3535;
  border-color: #c43c35;
 }
 .button.red:hover{
  background-color: #ee5f5b;
 }
.button.red.active{
  background-color: #c43c35;
}

.button.green{
  background-color:#57a957;
  border-color:#57a957
}

.button.green.hover{
  background-color:#62c462;
}
.button.green.active{
  background:#57a957;
}
</style>
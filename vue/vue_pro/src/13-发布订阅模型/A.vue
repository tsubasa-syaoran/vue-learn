<template>
  <div></div>
</template>

<script>


import pubsub from 'pubsub-js'
export default {
    name:'A',
    mounted(){
        // 挂载完毕后,订阅消息
        // this.pid = pubsub.subscribe('2023年第五期英语周报',function(messageName,message){
        //     // messageName 就是消息的名字
        //     // message 就是具体的消息(数据)
        //      console.log('消息的名字是:',messageName)
        //      console.log('消息的具体内容是',message)
        //      console.log(this)
        // })

         this.pid = pubsub.subscribe('2023年第五期英语周报',(messageName,message) =>{
            // messageName 就是消息的名字
            // message 就是具体的消息(数据)
             console.log('消息的名字是:',messageName)
             console.log('消息的具体内容是',message)
             console.log(this)
        })
    },
    beforeDestroy(){
        pubsub.unsubscribe(pid)
    }
}
</script>

<style>

</style>
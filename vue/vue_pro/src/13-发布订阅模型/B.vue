<template>
  <div>
     <button @click="publishEnglish">发布2023年第五期英语周报</button>
  </div>
</template>

<script>

import pubsub from 'pubsub-js'
export default {
    name:'B',
    methods:{
        publishEnglish(){
            // 发布消息
            pubsub.publish('2023年第五期英语周报','这是第5期映月湖周报的详细内u容,你感觉怎么样啊?')
           
        }
    }
}
</script>

<style>

</style>
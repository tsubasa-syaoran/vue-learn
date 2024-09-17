<template>
    <h2>计数器: {{data.counter1}}</h2>
    <button @click="data.counter1++">点我加1</button>
    <h2>计数器: {{data.counter2}}</h2>
     <button @click="data.counter2++">点我加1</button>
    <h2>计数器: {{data.counter3}}</h2>
     <button @click="data.counter3++">点我加1</button>
</template>

<script>

import {reactive,watchEffect} from 'vue'
export default {
  name: 'App',
  setup(){
    let data = reactive({
        counter1 : 1,
        counter2 : 100,
        counter3 : 1000
    })

    watchEffect(()=>{
       const a = data.counter1
       const b = data.counter3
       console.log(a,b)
    })
    return {data}
  }

}
</script>

<style>

</style>
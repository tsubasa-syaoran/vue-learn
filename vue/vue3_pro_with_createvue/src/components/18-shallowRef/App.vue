<template>
    <h2>计数器:{{data.counter}}</h2>
    <button @click="data.counter++">点我加1</button>
    <button @click="changeCounter">修改计数器</button>
</template>

<script>

import {ref, shallowRef} from 'vue'
export default {
    name: 'App',

    setup(){
      // let counter = shallowRef(1)

      let data = shallowRef({
        counter: 1
      })

      function changeCounter(){
        data.value = {counter:10000}
      }

      return {data,changeCounter}
    }

    
}
</script>

<style>

</style>
<template>
     <h2>计数器1:{{data.counter1}}</h2>
     <button @click="data.counter1++">计数器加1</button>
     <hr>
     <h2>计数器2:{{data.a.b.counter2}}</h2>
     <button @click="data.a.b.counter2++">计数器加1</button>

</template>

<script>
import { reactive,readonly, shallowReadonly } from 'vue'
export default {
  name: 'App',
  setup(){
    let data = reactive({
      counter1: 1,
      a:{
        b:{
          counter2: 100,
        }
      }
    })

    // data =readonly(data)
    data = shallowReadonly(data)
    return {data}
  }

}
</script>

<style>

</style>
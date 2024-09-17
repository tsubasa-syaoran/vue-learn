<template>
    <h2>计数器1:{{counter1}}</h2>
    <button @click="counter1++">计数器加1</button>
    <hr>
    <h2>计数器2:{{counter2}}</h2>
     <button @click="counter2++">计数器加1</button>
     <hr>
    <h2>计数器3:{{a.b.counter3}}</h2>
     <button @click="a.b.counter3++">计数器加1</button>
</template>

<script>
import { reactive,ref ,toRef,toRefs} from 'vue'
export default {
  name: 'App',
  setup(){

    let data = reactive({
      counter1: 1,
      counter2: 100,
      a:{
        b:{
          counter3: 1000
        }
      }
    })

    // return {data}
      // return {
      //   counter1: data.counter1,
      //   counter2: data.counter2,
      //   counter3: data.a.b.counter3
      // }


      console.log(toRefs(data))
      return {
         data,
         ...toRefs(data)
      }
  }

}
</script>

<style>

</style>
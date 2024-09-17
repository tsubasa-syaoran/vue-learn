<template>
    <h2>计数器:{{counterRefImpl}}</h2>
    <button @click="counterRefImpl++">点我加1</button>
     <h2>计数器:{{data.a.b.c.counter}}</h2>
    <button @click="data.a.b.c.counter++">点我加1</button>
</template>

<script>

import {watch,ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let counterRefImpl = ref(1)

    let data = ref({
      a:{
        b:{
          c:{
            counter:1
          }
        }
      }
    })

    // console.log(counterRefImpl.value)
     // 错误的
    // watch(counterRefImpl.value,(oldVal,newVal) => {})


    // 可以监视的
    // watch(()=>counterRefImpl.value,(oldVal,newVal) => {
    //   console.log(newVal,oldVal)
    // })

    // watch(data.value,(newVal,oldVal) => {
    //   console.log(newVal,oldVal),{deep:false}
    // })

    watch(data,(newVal,oldVal) => {
      console.log(newVal,oldVal)
      },{deep:true}
    )


    return {counterRefImpl,data}
  }

}
</script>

<style>

</style>
<template>
    <h2>计数器:1 {{data.counter1}}</h2>
    <h2>计数器:2 {{data.a.b.c.d.counter2}}</h2>
    <button @click="data.counter1++">1号计数器加1</button>
    <button @click="data.a.b.c.d.counter2++">2号计数器加1</button>
</template>

<script>

import {reactive,watch} from 'vue'
export default {
    name: 'App',

    setup(){
      let data = reactive({
        counter1: 1,
        a:{
          b:{
            c:{
              d:{
                counter2: 100
              }
            }
          }
        }
    })

    // watch(data,(newVal,oldVal) => {
    //   console.log(newVal,oldVal)
    // })

  //  watch(()=> data.counter1,(newVal,oldVal)=>{
  //     console.log(newVal,oldVal)
  //   })

  //   watch(data.a.b,(newVal,oldVal)=>{
  //     console.log(newVal,oldVal)
  //   })

  //    watch(()=>data.a.b.c.d.counter2,(newVal,oldVal)=>{
  //     console.log(newVal,oldVal)
  //   })

      watch([()=>data.counter1,()=>data.a.b.c.d.counter2],(newVal,oldVal)=>{
          console.log(newVal,oldVal)
        })

      return {data}
    }

    // 侦听某一个属性

 
}
</script>

<style>

</style>
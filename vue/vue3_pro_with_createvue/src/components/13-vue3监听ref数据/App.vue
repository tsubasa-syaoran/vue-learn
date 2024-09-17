<template>
  <h2>计数器:{{counter}}</h2>
  <h2>计数器2:{{counter2}}</h2>
  <button @click="counter++">计数器plus one</button>
  <button @click="counter2++">计数器2plus one</button>
</template>

<script>

import {ref,watch} from 'vue'
export default {
  name: 'App',
  


  setup(){
      let counter = ref(1)

      let counter2 = ref(100)

      // watch(counter,(newVal,oldVal)=>{
      //   console.log('计数器',newVal,oldVal)
      // },{immediate:true,deep: true})


      // watch(counter2,(newVal,oldVal) => {
      //    console.log('计数器2',newVal,oldVal)
      // })


      // 数组的方式

      watch([counter,counter2],(newVal,oldVal)=>{
        console.log(newVal,oldVal)
      })

      return {counter,counter2}
  }
  // data(){
  //   return {
  //     counter : 1
  //   }
  // },

  // watch : {
  //   // counter(newVal, oldVal){
  //   //   console.log(newVal,oldVal)
  //   // }

  //   counter: {
  //     immediate: true,
  //     deep : true,
  //     handle(newVal,oldVal){
  //        console.log(newVal,oldVal)
  //     }
  //   }
  // }

}
</script>

<style>

</style>
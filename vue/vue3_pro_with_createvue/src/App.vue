<template>
    <h2>计数器:{{counter}}</h2> 
   <button @click="add">计数器加1</button>
   <hr>
   <User></User>
</template>

<script setup>

import {ref} from 'vue'

import User from './components/User.vue'

 let counter = ref(100)

//  let data = reactive({
//   a:{
//     b:{
//       c:{
//         counter2:100
//       }
//     }
//   }
//  })

      function add(){
           counter.value++
      }
// export default {
//     name: 'App',
//     setup(){
//       let counter = ref(100)

//       function add(){
//            counter.value++
//       }
//       return {counter,add}
//     }
// }
</script>

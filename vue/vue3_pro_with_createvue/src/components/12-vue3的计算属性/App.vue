<template>
    姓名: <input type="text" v-model="data.name">
    <br>
    反转之后的姓名: <input type="text" v-model="reversedName">
</template>

<script>

import {computed, reactive} from 'vue'
export default {
  name: 'App',

  setup(){
    let data =reactive({
        name : ''
    })

    // let reversedName = computed(()=>{
    //     return data.name.split('').reverse().join('')
    // })

    // 完整写法
    let reversedName = computed({


      get(){
        return data.name.split('').reverse().join('')
      },
      set(val){
        data.name = val.split('').reverse().join('')
      }
    })


    return {data,reversedName}
  }
}
</script>

<style>

</style>
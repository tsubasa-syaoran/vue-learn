<template>
  
    数字1 : <input type="number" v-model="data.num1">
    <br><br>
    数字2 : <input type="number" v-model="data.num2">
    <br><br>
    求和结果 : {{data.result}}
    <br><br>
    <button @click="sum">求和</button>
</template>

<script>
import sum from './hooks/sum.js'
export default {
  name: 'App',
  setup(){
    //  let result =  sum()

    //  return result 
    return sum()
  }

}
</script>

<style>

</style>
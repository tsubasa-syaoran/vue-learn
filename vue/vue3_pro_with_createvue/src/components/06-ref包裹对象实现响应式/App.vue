<template>
      <h2>姓名: {{userRefImpl.name}}</h2>
      <h2>年龄: {{userRefImpl.age}}</h2>
      <h2>计数器: {{counterRefImpl}}</h2>
      <h2>城市: {{userRefImpl.addr.city}}</h2>
      <h2>街道: {{userRefImpl.addr.street}}</h2>
      <button @click="modifyUser">修改用户信息</button>
</template>

<script>

import {ref} from 'vue'
export default {
  name: 'App',

  setup(){
    let userRefImpl = ref({
      name: 'jack',
      age: 20 ,
      addr:{
        city: '北京',
        street : '大兴区凉水河二街'
      }
    })
    let counterRefImpl = ref(100)
    console.log(counterRefImpl)
    console.log(userRefImpl)

    function modifyUser(){

      counterRefImpl.value = 200
      // userRefImpl.value = {
      //   name : 'zhangsan',
      //   age: 50
      // }
      userRefImpl.value.name = 'zhagnsan'
      userRefImpl.value.age = 23

      userRefImpl.value.addr.city = '邯郸'
      userRefImpl.value.addr.street = '太极二路'
    }

    return {userRefImpl,counterRefImpl,modifyUser}
  }

}
</script>

<style>

</style>
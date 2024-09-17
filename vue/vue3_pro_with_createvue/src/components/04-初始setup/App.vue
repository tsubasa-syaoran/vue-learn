<template>
      <h2>姓名: {{user.name}}</h2>
      <h2>年龄: {{user.age}}</h2>
      <button @click="modifyUser">修改用户信息</button>
</template>

<script>
export default {
  name: 'App',

  setup(){
    let user = {
      name: 'jack',
      age: 20 
    }

    function modifyUser(){
      user.name = 'lucy',
      user.age = 30
    }

    return {user,modifyUser}
  }

}
</script>

<style>

</style>
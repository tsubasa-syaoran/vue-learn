<template>
    <User  @event1="showInfo"></User>
</template>

<script>

import User from './components/User.vue'
export default {
    name: 'App',
    components: {User},
    setup(){
      function showInfo(name,age){
        alert(`姓名:${name}  年龄:${age}岁`)
      }

      return {showInfo}
    }
}
</script>

<style>

</style>
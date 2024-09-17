<template>
  
  <User></User>
</template>

<script>
import emitter from './utils/event-bus.js'
import User from './components/User.vue'
import { onMounted } from 'vue'
export default {
  name : 'App',
  components:{User},
  setup(){
      onMounted(()=>{
          emitter.on('event1',showInfo)
      })

      function showInfo(user){
          alert(`姓名: ${user.name} 年龄:${user.age}岁`)
      }

      return {showInfo}
  }
}
</script>

<style>

</style>
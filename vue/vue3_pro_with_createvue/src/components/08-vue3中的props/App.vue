<template>
      <User name = "张三" age ="30" :sex="sex"></User>
</template>

<script>
import {ref} from 'vue'
import User from './components/User.vue'
export default {
  name: 'App',
  components: {User},
  setup(){
      let sex = ref('男')

      return {sex}
  }
}
</script>

<style>

</style>
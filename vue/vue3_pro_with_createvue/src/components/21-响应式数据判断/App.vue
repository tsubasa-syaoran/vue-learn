<template>
  
</template>

<script>

import {isRef,ref,isReactive,isProxy,isReadonly, reactive, readonly} from 'vue'
export default {
    name: 'App',
    setup(){
      //  let counter =1 
       let counter = ref(1)
       console.log(isRef(counter))

       let data = reactive({
        counter:1
       })

       console.log(isReactive(data))
       // 判断某个对象是否为代理对象
       console.log(isProxy(data))
       // 判断某个对象是否为只读对象
      //  console.log(isReadonly(data))
       data = readonly(data)
        console.log(isReadonly(data))

        console.log(isProxy(data))
    }
}
</script>

<style>

</style>
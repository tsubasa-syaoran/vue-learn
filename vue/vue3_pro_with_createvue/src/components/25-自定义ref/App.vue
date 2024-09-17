<template>
    <input type="text" v-model="name">
    <br><br>
    {{name}}
</template>

<script>
import {customRef, ref} from 'vue'
export default {
  name: 'App',
  setup(){
    // let name =ref('test')

    function useDeBouncedRef(value){
       let t 
       const x =  customRef((track,trigger) => {
            return {
              get(){
                 console.log('get执行了')
                 track()
                 return value
              },
              set(newValue){
                console.log('set执行了')
                clearTimeout(t)
                t= setTimeout(() => {
                    value = newValue
                     // 触发
                     trigger()
                },1000)
              }
            }
       })

       return x
    }


    let name = useDeBouncedRef('test')
    return {name}
  }
}
</script>

<style>

</style>
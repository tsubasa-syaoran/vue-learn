<template>
     <h2>计数器:{{data.counter}}</h2>
     <button @click="data.counter++">点我加1</button>
     <hr>
      <h2>计数器2:{{data.x}}</h2>
      <button @click="data.x.counter2++">计数器加1</button>
     <hr>
     <button @click="getRawObject">获取data的原始对象</button>
     <br><br>
     <button @click="addX">给data扩展一个x属性</button>

</template>

<script>
import { markRaw, reactive,toRaw} from 'vue'
export default {
  name: 'App',
  setup(){
    let data= reactive({
      counter: 1,
    })
    

    function getRawObject(){
        let rawObj = toRaw(data)

        // 修改原始对象,不会有响应式
        rawObj.counter++
        console.log('原始对象',rawObj)
    }

    function addX(){
        data.x = markRaw({counter2: 100})
    }

    return {data,getRawObject,addX}
  }

}
</script>

<style>

</style>
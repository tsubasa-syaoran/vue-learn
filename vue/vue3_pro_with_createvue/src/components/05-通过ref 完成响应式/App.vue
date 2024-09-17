<template>
     <h2>姓名:{{name}}</h2>
     <h2>年龄:{{age}}</h2>
     <button @click="sayHi('jack',20,$event)">SAY HI</button>
</template>

<script>

import {h} from 'vue'

export default {
  name : 'App',

  setup(){
        let name = '张三'
        let age = 20

        // function sayHi(){
        //   // alert('hi vue3!')
        //   alert(`姓名: ${name} , 年龄: ${age}`)
        // }
        function sayHi(a,b,e){
          alert(a + ',' + b)
          alert(e.target.innerText)
        }
         
        return {
          name: name,
          age: age,
          sayHi : sayHi
        }
        // return {name, age, sayHi}

        // return function(){
        //   return h('h1','welcome to study vue3!')
        // }

        // return () => h('h2','welcome to study vue3!')

  },
}
</script>

<style>

</style>
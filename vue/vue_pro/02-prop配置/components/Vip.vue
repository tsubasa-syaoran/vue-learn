<template>
  <div class="s">
    <h1>{{msg}}</h1>
    <h3>姓名{{name}}</h3>
    <h3>年龄:{{age}}</h3>
    <button @click="printInfo">打印会员信息</button>
    <button @click="a">a方法</button>
  </div>
</template>

<script>
// import {mix1} from '../mixin.js'
// import {mix2} from '../mixin.js'
export default {
    name:'Vip',
    data(){
        return {
            msg: '会员信息2',
            name: '李四2',
            age : 21
        }
    },
    // mixins: [mix1,mix2],
    methods:{
      a(){
        console.log('vip a ....')
        console.log('counter is ',this.counter)
      }
    }
}
</script>

<style scoped>
.s{
    background-color: aquamarine;
}
</style>
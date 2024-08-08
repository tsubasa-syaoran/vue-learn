<template>
  <div class="s">
    <h1>{{ msg }}</h1>
    <h3>姓名{{ name }}</h3>
    <h3>年龄:{{ age }}</h3>
    <button @click="printInfo">打印用户信息</button>
  </div>
</template>

<script>

// import {mix1} from '../mixin.js'
// import {mix2} from '../mixin.js'
// import {mix3} from '../mixin.js'
export default {
  name: "User",
  mounted(){
    console.log('user mouunted...')
  },
  data() {
    return {
      msg: "用户信息2",
      name: "张三2",
      age: 20,
    };
  },
//   mixins:[mix1,mix2,mix3],
  methods:{
    a(){
        console.log('user a ...')
    }
  }
};
</script>

<style scoped>
.s{
    background-color: bisque;
}
</style>
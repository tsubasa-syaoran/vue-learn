<template>
      <h2>姓名:{{userProxy.name}}</h2>
      <h2>年龄:{{userProxy.age}}</h2>
      <h2>计数器:{{userProxy.counter}}</h2>
      <h2>城市:{{userProxy.addr.city}}</h2>
      <h2>街道:{{userProxy.addr.street}}</h2>
       <h2>测试代码:{{userProxy.addr.a.b.c}}</h2>
        <h2>性别:{{userProxy.sex}}</h2>

      <h2>选课列表</h2>
      <ul>
        <li v-for="(c,index) in userProxy.courses" :key="index">{{index}},{{c}}</li>
      </ul>
      <button @click="modifyUser">修改用户信息</button>
      <br>
      <button @click="addSex">添加Sex属性</button>
      <br>
      <button @click="delSex">删除Sex属性</button>
      <br>
      <button @click="modifyCoures">修改课程</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup(){

      let userProxy = reactive({
        name: '张三',
        age : 30,
        counter : 200,
        addr:{
          city: '北京',
          street: '大兴区凉水河二街',
          a:{
            b:{
              c: 111
            }
          }
        },

        courses : ['语文','数学','英语']
      })

      console.log(userProxy)


      function modifyUser(){
        userProxy.name = '李四'
        userProxy.age = 40

        userProxy.counter = 500
        userProxy.addr.city = '邯郸'
        userProxy.addr.street = '太极二路'
        userProxy.addr.a.b.c = 222
      }

      function addSex(){
        userProxy.sex = '男'
      }

      function delSex(){
        delete userProxy.sex
      }

      function modifyCoures(){
        userProxy.courses[2] = '政治'
      }

      return {userProxy,modifyUser,addSex,delSex,modifyCoures}

  }

}
</script>

<style>

</style>
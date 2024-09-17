<template>
  <div>
    <h1>用户列表</h1>
    <input type="text" v-model="username">
    <button @click="saveUser(username)">保存用户</button>
    <ul>
        <li v-for="user in users" :key="user.id">用户名:{{user.name}}</li>
    </ul>
    <h3>当前用户数量:{{users.length}}</h3>
    <h3>当前会员数量:{{vips.length}}</h3>
    <h3>用户名:{{uname}}</h3>
    <h3>反转之后的用户名: {{reversedName}}</h3>
  </div>
</template>

<script>
 import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    name : 'User',
    data(){
        return {
            username : '',
           
        }
    },
    // mounted(){
    //     const x = 
    //  console.log(x)
    // },
    computed:{
        // users(){
        //     return $store.state.users
        // },
        // vips(){
        //     return $store.state.vips
        // },
        // uname(){
        //     return $store.state.uname
        // }

        // vuex 可以借助mapState 帮我自动生成以上的代码
        // 对象形式
        //...mapState({'users':'users',vips:'vips',uname:'uname'})

        // 数组形式, 计算属性的名字和state 中的属性名一致
        ...mapState(['users','vips','uname']),

        ...mapGetters(['reversedName']),


    },
    methods:{
        // saveUser(){
        //     // this.users.unshift({id:Date.now(),name:this.username})
        //      this.$store.dispatch('saveUser',this.username)
        //     // this.$store.commit('SAVE_USER',{id:Date.now(),name:this.username})
        // }

        ...mapActions({saveUser:'saveUser'}),

        // 写成数组形式

        ...mapActions['saveUser']
    }
}
</script>

<style>

</style>
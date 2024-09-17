<template>
    <div>
       <!--
       1.关于内置事件的实现步骤。
       第一步:提供事件源(以下这个按钮就是一个事件源)第二步:给事件源绑定事件
       v-on:事件名或者@事件名
       第三步:编写回调函数，将回调函数和事件进行绑定
       第四步:等待事件的触发,只要事件触发，则执行回调函数。2.关于组件的自定义事件，实现步骤:
       第一步:提供事件源(以下这个按钮就是一个事件源)第二步:给事件源绑定事件
       v-on:事件名或者@事件名
       第三步:编写回调函数，将回调函数和事件进行绑定
       第四步:等待事件的触发，只要事件触发，则执行回调函数。|
        -->
        <button @click="hello">内置事件的实现步骤</button>
        <User @event1="doSome"  @event2="doOther"></User>
        <User v-on:event1="doSome" @event2="doOther"></User>
        <User v-on:event1.once="doSome" @event2="doOther"></User>
        

        <!-- 准备一个组件 --> 
        <User ref="user"></User>
    </div>
</template>

<script>
    import User from './components/User.vue'
    export default {
        name: 'App',
        components:{User},
         mounted(){
          this.$refs.user.$on('event1',this.doSome)
          this.$refs.user.$on('event2',this.doOther)
          // 保证只触发一次
          // this.$refs.user.$once('event1',this.doSome)

          this.$bus.$on('eventx',this.test)

        },
        methods:{
          hello(){
            console.log('hello vue')
          },
          // doSome(name,age,gender){
          //   console.log(name,age,gender)
          // }

          doSome(name,...params){
            console.log(name,params)
          },
          doOther(){
              console.log('do other')
          },
          test(name){
              console.log('######',name)
          }
        },
       
}
</script>

<style>

</style>
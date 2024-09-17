<template>
    <div>
        <button @click="triggerEvent1">触发event1事件</button>
        <button @click="triggerEvent2">触发event2事件</button>
        <button @click="unbinding">解绑事件</button>
        <button @click="goodbye">再见</button>
        <vip></vip>
    </div>
</template>

<script>
import Vip from './Vip.vue'
export default {
    name: 'User',
    data(){
        return {
            name: 'zhangsan',
            age : 20,
            gender: '男'
        }
    },
    components:{Vip},
    methods:{
        triggerEvent1(){
            // this是当前组件实例 ,vc
            this.$emit('event1',this.name,this.age,this.gender)
        },
        triggerEvent2(){
            // console.log(66)
            this.$emit('event2')
        },
        unbinding(){
            // this.$off('event1')
            // this.$off(['event1','event2'])
            this.$off()
        },
        goodbye(){
            this.$destroy()
        }

    }
}
</script>

<style>

</style>
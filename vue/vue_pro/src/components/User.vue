<template>
    <div>
        <button @click="triggerEvent1">出发event1事件</button>
    </div>
</template>

<script>
export default {
    name: 'User',
    data(){
        return {
            name: 'zhangsan',
            age : 20,
            gender: '男'
        }
    },
    methods:{
        triggerEvent1(){
            // this是当前组件实例 ,vc
            this.$emit('event1',this.name,this.age,this.gender)
        }
    }
}
</script>

<style>

</style>
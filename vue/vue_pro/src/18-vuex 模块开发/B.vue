<template>
        <div>
        <h1>B组件</h1>
        <button @click="doB1">doB1 button</button>
        <button @click="doB2">doB2 button</button>
        <h3>state: {{$store.state.bModule.b}}</h3>
        <h3>getters: {{$store.getters['bModule/computedB']}}</h3>
    </div>
</template>

<script>
export default {
    name: 'B',
    mounted(){
        console.log(this.$store)
    },
    methods:{
        doB1(){
            this.$store.dispatch('bModule/doB1')
        },
        doB2(){
            this.$store.commit('bModule/doB2')
        },
    }
}
</script>

<style>

</style>
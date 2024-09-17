<template>
    <h1>User组件</h1>
    <h2>计数器: {{counter}}</h2>
    <button @click="counter++">计数</button>
</template>

<script>

import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
export default {
    name : 'User',
    setup(){
       
        console.log('setup ...')
        onBeforeMount(()=>{
            console.log('onBeforeMount')
        })

        onMounted(()=>{
            console.log('onMounted')
        })

        onBeforeUpdate(()=>{
            console.log('onBeforeUpdate')
        })

        onUpdated(()=>{
            console.log('onUpdated')
        })

        onBeforeUnmount(()=>{
            console.log('onBeforeUnmount')
        })

        onUnmounted(()=>{
            console.log('onUnmounted')
        })


        let counter = ref(0)
        return {counter}
    },

    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    // beforeMount(){
    //     console.log('beforeMount')
    // },
    // mounted(){
    //      console.log('mounted')
    // },
    // beforeUpdate(){
    //     console.log('beforeUpdate')
    // },
    // updated(){
    //      console.log('updated')
    // },
    // beforeUnmount(){
    //      console.log('beforeUnmount')
    // },
    // unmounted(){
    //     console.log('unmounted')
    // }



}
</script>

<style>

</style>
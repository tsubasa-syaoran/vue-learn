<template>
        <div>
        <h1>B组件</h1>
        <button @click="doB1">doB1 button</button>
        <button @click="doB2">doB2 button</button>
        <h3>state: {{b}}</h3>
        <h3>getters: {{computedB}}</h3>

        <button @click="displayBugs">显示bug列表信息</button>
        <ul>
            <li v-for="bug in bugList" :key="bug.id">{{bug.desc}}</li>
        </ul>
    </div>
</template>

<script>

import {mapActions,mapMutations,mapState,mapGetters} from 'vuex'
export default {
    name: 'B',
    // mounted(){
    //     console.log(this.$store)
    // },

    computed:{
            // b(){
            //     return this.$store.state.b
            // }
            ...mapState('bModule',['b','bugList']),

            // computedB(){
            //     return this.$store.getters.computedB
            // }
            ...mapGetters('bModule',['computedB'])
    },
    methods:{
        // doB1(){
        //     this.$store.dispatch('doB1')
        // },
        ...mapActions('bModule',['doB1','displayBugs']),
        // doB2(){
        //     this.$store.commit('doB2')
        // },
        ...mapMutations('bModule',['doB2'])
    }
}
</script>

<style>

</style>
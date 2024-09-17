<template>
    <div>
        <h1>A组件</h1>
        <button @click="doA1">doA1 button</button>
        <button @click="doA2">doA2 button</button>
        <h3>state: {{a}}</h3>
        <h3>getters: {{computedA}}</h3>
    </div>

</template>

<script>

import {mapActions,mapMutations,mapGetters,mapState} from 'vuex'
export default {
    name: 'A',
    // mounted(){
    //     console.log(this.$store)
    // },

    computed:{
            // a(){
            //     return this.$store.state.a
            // }
            ...mapState('aModule',['a']),
            // computedA(){
            //     return his.$store.getters.computedA
            // }
            ...mapGetters('aModule',['computedA'])
    },
    methods:{


        // doA1(){
        //     this.$store.dispatch('doA1')
        // },

        ...mapActions('aModule',['doA1']),
        // doA2(){
        //     this.$store.commit('doA2')
        // },
        ...mapMutations('aModule',['doA2'])
    }
}
</script>

<style>

</style>
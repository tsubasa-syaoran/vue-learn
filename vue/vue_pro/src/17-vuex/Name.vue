<template>
   <div>
        <input type="text" v-model="uname">
        <br>
        <h3>用户名:{{uname}}</h3>
        <h3>反转之后的用户名: {{reversedName}}</h3>
   </div>
</template>

<script>

import {mapState,mapGetters} from 'vuex'
export default {
    name : 'Name',

    computed:{


        //...mapState(['uname']),
        // uname (){
        //     return this.$store.state.uname
        // },

        uname : {
            get(){
                return this.$store.state.uname
            },
            set(value){
                this.$store.state.uname = value
            }
        },
        ...mapGetters(['reversedName'])
    }
}
</script>

<style>

</style>
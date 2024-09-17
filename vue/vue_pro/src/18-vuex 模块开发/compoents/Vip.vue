<template>
        <div>
            <h1>会员列表</h1>
            <input type="text" v-model="vipname">
            <button @click="SAVE_VIP(vipname)">保存会员</button>
            <ul>
                <li v-for="vip in vips" :key="vip.id">会员名:{{vip.name}}</li>
            </ul>
            <h3>当前用户数量:{{users.length}}</h3>
            <h3>当前会员数量:{{vips.length}}</h3>
            <h3>用户名:{{uname}}</h3>
           <h3>反转之后的用户名: {{reversedName}}</h3>
        </div>
</template>

<script>

import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    name: 'Vip',
    data(){
        return {
           vipname: '',
        }
    },
    computed:{
         ...mapState(['users','vips','uname']),
         ...mapGetters(['reversedName'])
    },
    methods:{
        // saveVip(){
        //     // this.vips.unshift({id:Date.now(),name:this.vipname})
        //     // this.$store.dispatch('saveVip',{id:Date.now(),name:this.vipname})
        //     this.$store.commit('SAVE_VIP',this.vipname)
        // },

        ...mapMutations(['SAVE_VIP'])
        // ...mapMutations({saveVip:'SAVE_VIP'})
    }
}
</script>

<style>

</style>
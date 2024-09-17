<template>
    <tr>
        <!-- <td><input type="checkbox" :checked="bug.resolved" @change="$event=>modifyResolved(bug.id)"></td> -->
        <td><input type="checkbox" v-model="bug.resolved"></td>
        <td> 
            <span v-show="!bug.editState" @click="enterState(bug)" class="desc">{{bug.desc}}</span>
            <input ref="inputDesc" v-show="bug.editState" type="text" :value="bug.desc" @blur="updateDesc(bug,$event)">
        </td>
        <td><button class="small red button" @click="$event=>deleteById(bug.id)">删除</button></td>
    </tr>
</template>

<script>

import pubsub from 'pubsub-js'
export default {
    name: 'BugItem',
    props:['bug'],
    methods:{
        modifyResolved(bugId){
            // this.modifyResolvedCallBack(bugId)
            // this.$bus.$emit('modifyResolvedCallBack',bugId)
            pubsub.publish('modifyResolvedCallBack',bugId)
        },
        deleteById(bugId){
            // console.log(bugId)
            //   this.deleteByIdCallBack(bugId)
            //   this.$bus.$emit('deleteByIdCallBack',bugId)
             pubsub.publish('deleteByIdCallBack',bugId)
        },
        enterState(bug){
            if(bug.hasOwnProperty('editState')){
                bug.editState = true
            }else{
                 this.$set(bug,'editState',true)
            }

            //  this.$refs.inputDesc.focus()
            this.$nextTick(function(){
                this.$refs.inputDesc.focus()
            })
        },

        updateDesc(bug,event){
            // console.log(bug.id)
            // console.log(event.target.value)
            let newDesc = event.target.value.trim()
            if(!newDesc) return 
            // this.updateDescCallBack(bug,newDesc)
            // this.$bus.$emit('updateDescCallback',bug,newDesc)
            bug.desc = newDesc
            pubsub.publish('updateDescCallback',bug)
            this.bug.editState = false
        }
        
    }
}
</script>

<style scoped>
    table tbody tr:nth-child(odd){
        background-color: #eee;
    }
    table tbody th:hover{
        background-color: #ccc;
    }
    table tbody tr td:first-child{
        color: #f40;
    }
    td{
        border: 1px solid #999;
        text-align: center;
        padding: 5px 0;
    }

    .desc{
        cursor: pointer;
    }
</style>
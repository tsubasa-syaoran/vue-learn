<template>
  <div v-show="bugList.length"> 
    <table>
        <thead>
            <tr class="checkboxheader">
                <!-- <th class="c1">全选<input type="checkbox" :checked="isAll" @change="selectAll"> </th> -->
                <th class="c1">全选<input type="checkbox" v-model="isAll"> </th>
                <th>bugm描述</th>
                <th class="c2">操作</th>
            </tr>
        </thead>
        <tbody>
            <BugItem v-for="bug of bugList" :key="bug.id" :bug="bug"></BugItem>
            <!-- <tr>
                <td><input type="checkbox" checked="true"></td>
                <td>xxxx</td>
                <td><button class="small red button">解除</button></td>
            </tr> -->
        </tbody>
    </table>
  </div>
</template>

<script>
import BugItem from './BugItem.vue'
export default {
    name: 'BugList',
    props:['bugList','selectAllCallBack'],
    components:{
        BugItem
    },
     computed:{
        resolveCount(){
            return  this.bugList.reduce((a,b)=> {
                return a+(b.resolved? 1  : 0)
            },0 )
            
        },
        // isAll(){
        //    return this.bugList.length == this.resolveCount && this.bugList.length>0
        // }
        isAll:{
            get(){
                return this.bugList.length == this.resolveCount && this.bugList.length>0
            },
            set(value){
                 //this.selectAllCallBack(value)
                 this.$emit('selectAllCallBack',value)
            }
        }
    },
    methods:{
        selectAll(event){
            this.selectAllCallBack(event.target.checked)
            // console.log(event.target.checked)
        }
    }
}
</script>

<style scoped>
    table{
        width: 40%;
        border-collapse: collapse;
    }
    table caption{
        font-size: 1em;
        font-weight: bold;
        margin: 1em 0;
    }
    .c1,.c2{
        width: 100px;
    }
    th {
        border: 1px solid #999;
        text-align: center;
        padding: 5px 0;
    }
    table thead tr{
        background-color: #008c8c;
        color: #fff;
    }
    
</style>
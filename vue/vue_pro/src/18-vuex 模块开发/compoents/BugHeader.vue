<template>
   <div class="header">
        <textarea cols="105" rows="4" v-model="desc" placeholder="请输入BUG的描述信息">

        </textarea>
        <br/>
        <button class="small green button"  @click="saveBug">保存</button>
    </div>
</template>

<script>
export default {
    name: 'BugHeader',
    data(){
        return {
            desc: ''
        }
    },
    // props:['bugList'],
    methods:{
        saveBug(){
            if(!this.desc.trim()) return 
            let bugObj = {id:Date.now(),desc:this.desc,resolved:false}
            // console.log(bugObj)
            // this.bugList.unshift(bugObj)
           
            // this.saveBugObjCallBack(bugObj)
            this.$emit('saveBugObjCallBack',bugObj)
            this.desc = ''
        }
    }
}
</script>

<style scoped>
    .header{
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>
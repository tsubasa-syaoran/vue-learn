<template>
    <div class="footer" v-show="bugList.length">
        <button class="small red button" @click="clearSolved">清除已解决</button>
        <span>当前BUG总量{{bugList.length}}个,已解决{{resolveCount}}个</span>
    </div>
</template>

<script>
export default {
    name: 'BugFooter',
    props: ['bugList','clearSolvedCallBack'],
    computed:{
        resolveCount(){
            // let count =0 
            // this.bugList.forEach(bug => {
            //        if( bug.resolved) count++
            // })
            // return count

            // a是什么?a是上一次回调函数调用之后的返回值。// b是什么?当前被统计的对象。(bug对象)
            return  this.bugList.reduce((a,b)=> {
                return a+(b.resolved? 1  : 0)
            },0 )
            
        }
    },
    methods:{
        clearSolved(){
            this.clearSolvedCallBack()
        },
        updateDesc(){
            console.log(666)
        }
    }
}


</script>

<style scoped>
    .footer{
        margin-top: 10px;
    }
    .footer span{
        font-size: 12px;
    }
</style>
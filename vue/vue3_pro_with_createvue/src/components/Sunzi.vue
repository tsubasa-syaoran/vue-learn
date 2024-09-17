<template>
        <div class="s4">
            <h2>我是孙子组件{{counter}}</h2>

        </div>

        <button @click="isShow = true"> 弹窗</button>
        <teleport   to='body'  >
            <div v-show="isShow" class="cover">
                <div  class="s">
                    我是一个窗口...
                    <button @click="isShow = false ">关闭</button>
                </div>
            </div>
        </teleport>    
</template>

<script>
    import {ref,inject} from 'vue'

export default {
    name: 'Sunzi',

    setup(){
            let isShow = ref(false)
            let counter = inject('c')
            return {isShow,counter}
  }
}
</script>

<style lang="css" scoped> 
   .s4 {
      width : 200px;
      height: 200px;
      background-color: darkmagenta;
   }

    .s{
    width: 250px;
    height: 250px;
    background-color: cadetblue;
   }
   .cover{
    position: absolute;
    top:0;bottom:0 ;left : 0 ;right: 0;
    background-color: darkgray;
    /* opacity: 90%; */
   }

</style>
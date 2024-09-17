<template>
    <div class="s3">
        <h2>我是儿子组件</h2>
        <Sunzi></Sunzi>
        
     
    </div>
</template>

<script>
    import Sunzi from './Sunzi.vue'
    export default {
        name: 'ErZi',
        components: {Sunzi},
     }
</script>

<style lang="css" scoped> 
   .s3 {
      width : 300px;
      height: 300px;
      background-color: chartreuse;
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
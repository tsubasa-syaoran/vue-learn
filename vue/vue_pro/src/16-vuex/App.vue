<template>
  <div>
    <h1>数字是{{$store.state.num}}</h1>
    <button @click="plusOne">点我加1</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      num : 0
    }
    
  },
  methods:{
    plusOne(){
        //this.$store.state.num
        this.$store.dispatch('plusOne',this.num)
    }
  }
}
</script>

<style>

</style>
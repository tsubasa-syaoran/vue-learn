<template>
  <div>
    <h3>品牌: {{ brand }}</h3>
    <h3>价格: {{ cprice }}</h3>
    <h3>颜色: {{ color }}</h3>
    <button @click="add">价格加1</button>
  </div>
</template>

<script>
export default {
  name: "Car", // 组件名称，可选但推荐
  data(){
      return {
        cprice : this.price
      }
  },
  methods:{
    add(){
      console.log('heloo')
      this.cprice++
    }
  },
//   data() {
//     return {
//       brand: "宝马520",
//       price: 10,
//       color: "黑色",
//     };
//   },
//    props: ['brand','color','price']

// props:[
//     brand: String,
//     color: String,
//     price: Number
// ]
    props:{
      brand:{
            type: String,
            required: true
        },
        color:{
            type: String,
            default: '红色'
        },
        price:{
            type: Number,
            required: true
        },
    }
}
</script>
<template>
    <div>
      <MyHeader> </MyHeader>
         <div>
          <h1>省份</h1>
          <button @click="forward">前进</button>
            <button @click="back">后退</button>
            <button @click="forwardTwo">前进2步</button>
            <button @click="backTwo">后退2步</button>
            <ul>
                <li><router-link to="./hebei" active-class="selected">河北省</router-link></li>
                <li><router-link to="./henan" active-class="selected">河南省</router-link></li>
            </ul>
       </div>
      <!--该标签下面的所有内容，都不会被销毁 -->

      <!-- -->
      <keep-alive :include="['HeBei','HeNan']">
         <router-view></router-view>
      </keep-alive>
      
        
    </div>
</template>
<script>
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',

  components: {MyHeader},
  methods: {
    forward(){
        this.$router.forward()
    },

    back(){
        this.$router.back()
    },

    forwardTwo(){
        this.$router.go(2)
    },

    backTwo(){
        this.$router.go(-2)
    }

  }

}
</script>

<style>
       .s1 {
            margin-left : 100px;
        }

       .s2 {
            margin-left : 100px;
        }


        .selected{
            background-color: aqua;
        }
</style>
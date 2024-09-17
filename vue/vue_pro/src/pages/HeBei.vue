<template>
  <div class="s1">
         <div> 
            <h2>市</h2>
            <ul>
                <!-- <li><router-link to="/hebei/city?a1=长安区&a2=裕华区&a3=新华区" active-class="selected">石家庄</router-link></li>
                
                <li><router-link to="/hebei/city?a1=邯山区&a2=丛台区&a3=复兴区" active-class="selected">邯郸</router-link></li> -->
              
                <!-- <li><router-link :to="`/hebei/city?a1=${sjz[0]}&a2=${sjz[1]}&a3=${sjz[2]}`" active-class="selected">石家庄</router-link></li>
                <li><router-link :to="`/hebei/city?a1=${hd[0]}&a2=${hd[1]}&a3=${hd[2]}`" active-class="selected">邯郸</router-link></li> -->


                <!-- query 对象形式传参 -->
                <!-- <li><router-link active-class="selected" :to="{


                    name: 'shi',
                    query: {
                        a1: sjz[0],
                        a2: sjz[1],
                        a3: sjz[2],
                    }
                }" >石家庄</router-link></li> -->
                <!-- <li><router-link  active-class="selected" :to="{
                    name: 'han',
                    query:{
                        a1 : hd[0],
                        a2 : hd[1],
                        a3 : hd[2],
                    }
                }">邯郸</router-link></li> -->

                <!-- <li><router-link active-class="selected" to="/hebei/sjz/裕华区/新华区/长安区">石家庄</router-link></li>
                <li><router-link active-class="selected" to="/hebei/hd/邯山区/丛台区/复兴区">邯郸</router-link></li> -->
                
                <!-- <li><router-link active-class="selected" :to="`/hebei/sjz/${sjz[0]}/${sjz[1]}/${sjz[2]}`">石家庄</router-link></li>
                <li><router-link active-class="selected" :to="`/hebei/hd/${hd[0]}/${hd[1]}/${hd[2]}`">邯郸</router-link></li> -->

                <!-- params 对象形式 -->

                <!-- 声明式导航-->
                <li><input type="checkbox">
                    <router-link :replace=true active-class="selected" :to="{
                    name : 'shi',
                    params: {
                        a1: sjz[0],
                        a2: sjz[1],
                        a3: sjz[2],
                    }
                }">石家庄</router-link>
                    <button @click="goSjz">石家庄</button>
                </li>
                <li><input type="checkbox">
                <router-link  :replace=true active-class="selected" :to="{
                    name : 'han',
                    params: {
                        a1: hd[0],
                        a2: hd[1],
                        a3: hd[2],
                    }
                }">邯郸</router-link>
                
                    <button @click="goHandan">邯郸</button>
                </li>

                <li><input type="checkbox">唐山</li> 
                <li><input type="checkbox">保定</li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name : 'HeBei',
    data(){
        return {
            sjz:['长安区','裕华区','新华区'],
            hd: ['邯山区','丛台区','复兴区']
        }
    },

    mounted(){
        this.timer = setInterval(()=>{
            console.log('我是一个定时器！')
        },1000)

        
    },

    activated(){
        console.log('激活了')
    },
    deactivated(){
        console.log('失效了')
    },

    beforeDestroy(){
        console.log('河北省下面的市被销毁了')
        clearInterval(this.timer)

    },
    methods:{
        goSjz(){
            //
            this.$router.push({
                    name : 'shi',
                    params: {
                        a1: this.sjz[0],
                        a2: this.sjz[1],
                        a3: this.sjz[2],
                    }
                },() => {},()=>{})
        },
        goHandan(){
            this.$router.replace({
                 name : 'han',
                params: {
                    a1: this.hd[0],
                    a2: this.hd[1],
                    a3: this.hd[2],
                }
            },()=>{},()=>{})
        }
        
    }

}
</script>

<style>

</style>
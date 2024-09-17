<template>
   <div class="s2">
    <h2>区</h2>
    <ul>
    <!-- <li>{{$route.query.a1}}</li>
     <li>{{$route.query.a2}}</li>
     <li>{{$route.query.a3}}</li> -->
        <!-- <li v-for ="areaName,propertyName in $route.query" :key="propertyName">{{areaName}}</li> -->
    <!-- <li>{{$route.params.a1}}</li>
     <li>{{$route.params.a2}}</li>
     <li>{{$route.params.a3}}</li> -->

     <!-- <li v-for ="areaName,propertyName in $route.params" :key="propertyName">{{areaName}}</li>  -->


     <li>{{a1}}</li>
     <li>{{a2}}</li>
     <li>{{a3}}</li>

     <!-- <li>{{x}}</li>
     <li>{{y}}</li> -->

    </ul>
  </div>
</template>

<script>
export default {
        name : 'City',
        // props: ['x','y','a1','a2','a3'],
         props: ['a1','a2','a3'],
        mounted(){
            console.log(this.$route)
              console.log(this.$route.params)
        },


        beforeRouteEnter(to,from,next){
                console.log(`进入路由组件之前:${to.meta.title}`)
                next()
        },
        beforeRouteLeave(to,from,next){
             console.log(`离开路由组件之前:${from.meta.title}`)
             next()
        }
        // computed: {
        //     a1(){
        //         return this.$route.params.a1
        //     },
        //     a2(){
        //         return this.$route.params.a2
        //     },
        //     a3(){
        //         return this.$route.params.a3
        //     }
        // }
}
</script>

<style>

</style>
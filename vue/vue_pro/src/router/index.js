import VueRouter  from "vue-router";

import HeBei from '../pages/HeBei.vue'
import HeNan from'../pages/HeNan.vue'
import ShiJiaZhuang from '../pages/ShiJiaZhuang.vue'
import HanDan from '../pages/HanDan.vue'
import City from '../pages/City.vue'

const router = new VueRouter({
    // 配置所有的路由规则
    mode:'history',

    routes : [
        {
            path : '/hebei',
            component : HeBei,
            meta:{title:'河北省'},
            children: [
                // {
                //     path : 'shijiazhuang' ,
                //     component: ShiJiaZhuang
                // },
                // {
                //     path : 'handan',
                //     component: HanDan
                // }

                {
                    name : 'shi',
                    path : 'sjz/:a1/:a2/:a3',
                    component: City,
                    // props: {
                    //     x: '张三',
                    //     y: '李四'
                    // }

                    // props($route){
                    //     return {
                    //         a1 : $route.params.a1,
                    //         a2 : $route.params.a2,
                    //         a3 : $route.params.a3,
                    //         x: '张三',
                    //         y: '李四'
                    //     }
                    // }

                    // 支持prams 对象
                    props: true ,
                    meta:{
                        isAuth: true,
                        title: '石家庄'
                    },
                    beforeEnter(to,from ,next){
                        let loginName = "admin"
                            if(loginName === 'admin'){    
                                next()
                            }
                            else{
                                alert('对不起，您没有权限！')
                            }
                    }              
                  },
                {
                    name : 'han',
                    path : 'hd/:a1/:a2/:a3',
                    component: City,
                    // props(t){
                    //     return {
                    //         a1 : t.params.a1,
                    //         a2 : t.params.a2,
                    //         a3 : t.params.a3,
                    //         x: '张三',
                    //         y: '李四'
                    //     }
                    // }
                    props: true,
                    meta:{
                        isAuth: true,
                        title: '邯郸'
                    }

                }
            ]
        },
        {
            path : '/henan',
            component : HeNan,
            meta:{title:'河南省'},
        },
    ]
})



// 全局前置路由守卫
// from 是一个路由对象，表示从哪来 

// to 是一个路由对象， 表示到哪去，
// next 表示放行，继续往下走

// router.beforeEach((to, from, next)=>{
//     // console.log(666)
//     // console.log(to)
//     // console.log(from)
//     // console.log(next)


//     // let loginName = "admin"

//     // if(to.meta.isAuth){
//     //     if(loginName === 'admin'){    
//     //         next()
//     //     }
//     //     else{
//     //         alert('对不起，您没有权限！')
//     //     }
//     // }else{
//     //     next()
//     // }
    
// })

// 全局后置路由守卫

router.afterEach((to,from)=>{
    document.title = to.meta.title || '欢迎使用本系统'
})



export default router
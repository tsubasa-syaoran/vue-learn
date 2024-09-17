import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// const VueCompoentConstruct = Vue.extend({})


// const globalvc = new VueCompoentConstruct()

// Vue.prototype.x = globalvc


import VueRouter from 'vue-router'
Vue.use(VueRouter)


// index.js 可以省略
import router from './router/index.js'

const vm = new Vue({
  render: h => h(App),
  beforeCreate(){
    // 全局事件总线
    Vue.prototype.$bus = this
  },
  // 全新的配置项
  // store : store
  router: router
  
}).$mount('#app')

console.log(vm)





import Vue from 'vue'
import App from './App.vue'

import {mix1} from './mixin.js'
import {mix2} from './mixin.js'
import {mix3} from './mixin.js'

import {p1} from './plugins.js'

Vue.use(p1,1,2,3,4)

Vue.mixin(mix1)
Vue.mixin(mix2)
Vue.mixin(mix3)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// 创建store 对象
// vuex 一个功能对应一个模块
// 业务拆分为A,B 两个模块







import aModule from './a'

import bModule from './b'
import cModule from './c'

// 简写形式
export default new Vuex.Store({
    modules:{aModule,bModule,cModule} }
)



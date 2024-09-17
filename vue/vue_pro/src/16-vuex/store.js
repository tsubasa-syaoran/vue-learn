import Vue from 'vue'
import Vuex from 'vuex'

// 使用插件
Vue.use(Vuex)

// 创建store 对象

const actions = {
    // pulsOne: function(){

    // }
    plusOne(context,value){
        value = value + 1
        context.dispatch('otherAction',value)
        // 提交上下文环境
        context.commit('PLUS_ONE',value)
1    },

    otherAction(context,value){
        console.log('666')
    }

}

const mutations = {
    // 更新state 
    PLUS_ONE(state,value){
        state.num += value
    }


}

const state = {
    num : 0
}

// 简写形式
export default new Vuex.Store({actions,mutations,state})

// const store = new Vuex.Store({
//     // 负责执行某个行为的对象
//     actions : actions,
//     // 负责更新的对象
//     mutations: mutations,
//     state : state
// })

// // 导出store 对象
// export default store


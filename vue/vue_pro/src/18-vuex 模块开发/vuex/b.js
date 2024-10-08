

import axios from 'axios'

export default {
    namespaced : true,
    actions : {

        doB1(){
            console.log('doB1 action...')
        },

        displayBugs(context,value){
                axios.get('/api/vue/bugs').then(
                    response => {
                        // console.log('响应数据:',response.data)
                        context.commit('DISPLAY_BUGS',response.data)
                    },
                    error => {
                        console.log('错误信息为:',error.message)
                    },
                )
        }
    },
    mutations : {
        doB2(){
            console.log('doB2 mutation...')
        },
        DISPLAY_BUGS(state,value){
            state.bugList = value
        }

    },
    state : {
        b : 2,
        bugList: []
    },
    getters : {
        computedB(){
            return 2 
           }
    }
}
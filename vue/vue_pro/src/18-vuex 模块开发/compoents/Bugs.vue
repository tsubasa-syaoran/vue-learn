<template>
        <div>
             <button @click="getBugs">获取bug列表信息</button>
             <button @click="getUser">获取用户列表信息</button>
        </div>
</template>

<script>

    import axios from 'axios'
    export default {
        name: 'Bugs',
        methods:{
            getBugs(){
                axios.get('api/vue/bugs').then(
                    response => {
                        console.log('服务器响应回来的数据:',response.data)
                    },
                    error => {
                        console.log('错误信息',error.message)
                    }
                )
            },
            getUser(){
                axios.get('abc/vue/users').then(
                    response => {
                        console.log('服务器响应回来的数据:',response.data)
                    },
                    error => {
                        console.log('错误信息',error.message)
                    }
                )
            }
            
        }
    }
</script>

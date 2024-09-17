<template>
   <div class="search">
            <input type="text" placeholder="请输入城市名字" spellcheck="false" v-model="cityName">
            <button @click="search"><img src="../assets/images/search.png"></button>
        </div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'Search',
    data(){
        return {
            cityName: ''
        }
    },
    methods:{
        search(){

            const apikey = "4944d09f3738f437a9fc8f472c51fe1d"
            // 使用ES6的模板语法进行字符串拼接

            if(!this.cityName.trim()) return 
            const apiUrlGetLanAndLon = `http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&appid=${apikey}`
            // 发送ajax 请求
            axios.get(apiUrlGetLanAndLon).then(
                response => {
                    console.log('响应数据:',response.data)
                    // 获取纬度和经度

                    if(!response.data.length) {
                        this.$bus.$emit('displayNotFound',true)
                        return 
                    } 
                    const lat = response.data[0].lat
                    console.log('纬度',lat)
                    const lon = response.data[0].lon
                    console.log('经度',lon)
                    // 再发送一次AJAX 请求,调用接口,根据经度和纬度获取天气信息
                    //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

                    const apiUrlGetWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
                    axios.get(apiUrlGetWeather).then(
                        response =>{
                            console.log('响应数据:',response.data)

                            const weather = {
                                // 天气图片路径
                                imgPath : `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                                //  温度 
                                temp : response.data.main.temp,
                                //  湿度
                                humidity: response.data.main.humidity,
                                windSpeed : response.data.wind.speed,
                                //  风速
                                city : this.cityName,

                                isShow : true
                            }
                            console.log(weather)

                            this.$bus.$emit('displayWeather',weather,false)

                            // 触发事件
                        },
                        error => {
                            console.log('错误信息为:',error.message)
                        }
                    )
                },
                error => {
                    console.log('错误信息为:',error.message)
                }
            )
            console.log(666)
        }
    }
}
</script>

<style scoped>
    .search {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .search input {
        border: 0;
        outline: 0;
        background: #ebfffc;
        color: #555;
        padding: 10px 25px;
        height: 60px;
        border-radius:30px;
        flex:1;
        margin-right:16px;
        font-size:18px;
    }

    .search button{
        border:0;
        outline:0;
        background: #ebfffc;
        border-radius:50%;
        width:60px;
        height: 60px;
        cursor: pointer;
    }

    .search button img{
        width:16px;
    }

</style>
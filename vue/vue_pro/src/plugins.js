export const p1 = {
    install(Vue,a,b,c,d){
        console.log('这个插件正在显示一个可爱的封面...')
        console.log('vue is ',Vue)
        console.log(a,b,c,d)
        Vue.prototype.counter = 1000
    }
}
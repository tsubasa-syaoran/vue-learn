// 定义一个类

class Vue {
    constructor(options){
        Object.keys(options.data).forEach((propertyName,index) => {
            // console.log(typeof property,property,index)

            let firstChar = propertyName.charAt(0)
            if(firstChar != '_' && firstChar != '$'){
                Object.defineProperty(this,propertyName,{
                    // 数据代理
                    get: function(){
                        return options.data[propertyName]
                    },
                    // 数据劫持
                    set: function(val){
                        options.data[propertyName] = val
                        console.log('页面上的DOM 元素更新了')
                    }
                })
            }
         
        })

        // Object.keys(options.methods).forEach((methodName, index) => {
        //      this[methodName] = options.methods[methodName]
        // })
    }
}
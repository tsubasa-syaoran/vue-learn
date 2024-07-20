// 定义一个类

class Vue {
    constructor(options){
        Object.keys(options.data).forEach((propertyName,index) => {
            // console.log(typeof property,property,index)

            let firstChar = propertyName.charAt(0)
            if(firstChar != '_' && firstChar != '$'){
                Object.defineProperty(this,propertyName,{
                    get: function(){
                        return options.data[propertyName]
                    },
                    set: function(val){
                        this.options.data[propertyName] = val
                    }
                })
            }
         
        })

        Object.keys(options.methods).forEach((methodName, index) => {
             this[methodName] = options.methods[methodName]
        })
    }
}
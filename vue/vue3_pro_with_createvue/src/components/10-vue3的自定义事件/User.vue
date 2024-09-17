<template>
  
        <button @click="triggerEvent1">触发event1事件</button>
</template>

<script>
export default {
    name : 'User',

    setup(props,context){
        function triggerEvent1(){
            context.emit('event1','张三',50)
        }

        return {triggerEvent1}
    }
}
</script>


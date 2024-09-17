<template>
   <button @click="triggerEvent1">触发全局事件总线上的event1事件</button>
   <br>
   <br>
   <button @click="clearAllEvent">接触全局事件中线上的所有绑定的事件</button>
   <br>
   <br>
   <button @click="clearEvent1">接触全局事件总线上的event1事件</button>
</template>

<script>

import emitter from '../utils/event-bus.js'
export default {
    name: 'User',
    setup(){
        function triggerEvent1(){
            emitter.emit('event1',{name:'张三',age:30})
        }

        function clearAllEvent(){
            emitter.all.clear()
        }

        function clearEvent1(){
            emitter.off('event1')
        }

        return {triggerEvent1,clearAllEvent,clearEvent1}
    }
}
</script>

<style>

</style>
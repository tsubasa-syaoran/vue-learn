<template>
   <h2>姓名:{{name}}</h2>
   <h2>年龄:{{age}}</h2>
   <h2>性别:{{sex}}</h2>
</template>

<script>
export default {
    name : 'User',
    props: ['name','age','sex'],

    setup(props){
        // console.log(props)
        console.log(props.name)
        console.log(props.age)
        console.log(props.sex)
    }
}
</script>

<style>

</style>
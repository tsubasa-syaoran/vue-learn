export const mix1 ={
    methods:{
        printInfo(){
            console.log(this.name,',',this.age)
        }
    }
}

export const mix2 ={
    methods: {
        a(){
            console.log('mix a ...')
        }
    }
}

export const mix3 ={
    mounted(){
        console.log('mixinjs mouunted...')
      },
}
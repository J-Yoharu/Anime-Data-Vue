<template>
        <!-- eslint-disable -->

    <div class="carousel m-2" style="overflow:hidden">
            <slot></slot>
        <div class="carousel-content d-inline-flex w-100" style="white-space:nowrap;overflow-y:hidden;overflow-x=scroll">
          
            <Cards :data='arr'/>
            
            <div class="carousel-button right d-flex align-items-center"  @click="num++">
                <i class="fa fa-3x fa-arrow-circle-right"></i>
            </div>
            <div class="carousel-button left d-flex align-items-center" @click="num--">
                <i class="fa fa-3x fa-arrow-circle-left"></i>
            </div>
        </div>
    

</div>
</template>

<script>
import Cards from './Cards';
export default {
    components:{Cards},
    props:['arr'],
    data(){
        return{
            num:0,
            carousel:'',
            qtdComponents:0,
            elementSize:0,
       
        }
    },
    methods:{
        mover(num){
            let cardsNaTela=0;
            //quantidades de cards que tem na view
            for (let index = 0; index < this.qtdComponents.length; index++) {
                if(this.elementSize*(index+1)>this.carousel.offsetWidth){
                    cardsNaTela = index;
                    console.log(`Cards na tela = ${cardsNaTela}`)
                    break;
                }   
            }
            let vezesDeRolagem = Math.floor(this.qtdComponents.length/cardsNaTela);
            
            this.carousel.scrollTo((this.elementSize*cardsNaTela)*(num % vezesDeRolagem),0);
        },
    },
    watch:{
        num(){
            this.mover(this.num);
        }
    
    },
    mounted(){
        this.carousel = this.$el.lastChild;
    },
    updated(){
        try{
            //tem que mostrar todas os cards dentro do carousel
            this.qtdComponents=this.carousel.firstChild.children;

            //o tamanho do elemento é igual o primeiro elemento do card + a borda dele *2 (right e left)
            this.elementSize=this.qtdComponents[0].offsetWidth+ this.qtdComponents[0].offsetLeft*2;
        }catch(e){
            console.log("não tem array");
        }
    }
}
</script>

<style>
.carousel-content{
    transition:2s;
}
.carousel-content::-webkit-scrollbar {
  display: none;
}
.carousel-content{
     scroll-behavior: smooth;
}
.carousel-button{
    position:absolute;
    width:3rem;
    height:3rem;
    outline: none;
    height:100%;
      
}
.carousel-button:hover{
    color:white;
}
.right{
    right:0;
    transition: 0.3s;
}
.right:hover{
    background-image:linear-gradient(to left,rgba(0,0,0,0.8) 0,rgba(0,0,0,0.0001) 100%)
}
.left{
    left:0;
    transition: 0.3s;
}
.left:hover{
    background-image:linear-gradient(to right,rgba(0,0,0,0.8) 0,rgba(0,0,0,0.0001) 100%)
}
</style>
<template>
        <!-- eslint-disable -->

    <div class="carousel d-inline-flex" style="overflow:hidden">
    <div class="carousel-content d-inline-flex w-100" style="white-space:nowrap;overflow-y:hidden;overflow-x=scroll">
        <div v-for="(anime,index) in arr" style="min-width:13rem;min-height:16rem;position:relative;" :key="index" class="card item d-inline-flex m-2 rounded shadow-lg border">
            <img class="card-img-top" :src="anime.image_url" alt="">
            <div class="card-body p-0">
                <h4 class="card-title mt-2 text-center m-0">{{anime.title}}</h4>
            </div>
        </div>
    </div>
    
    <button class="rounded-circle border bg-primary" style="position:absolute;right:0;top:50%;width:3rem;height:3rem"  @click="mover('right',$event)">
        >
    </button>
    <button class="rounded-circle border bg-primary" style="position:absolute;left:0;top:50%;width:3rem;height:3rem" @click="mover('left',$event)">
        <span><</span>
    </button>

</div>
</template>

<script>
export default {
    props:['arr'],
    data(){
        return{
            tamanhoRolagem:0,
        }
    },
    methods:{
        mover(direction,$event){
            var carousel = $event.path[1].children[0];
            var components = $event.path[1].children[0].children;
            var cardSize = components[0].offsetWidth+ components[0].offsetLeft*2;
            var cardsNaTela=0;

            for (let index = 0; index < components.length; index++) {
                if(cardSize*(index+1)>carousel.offsetWidth){
                    cardsNaTela = index;
                    break;
                }
                
            }
            //var cardsNaTela = carousel.offsetWidth
            if(direction=="right"){
                    this.tamanhoRolagem+=cardSize;
            }else if(direction=="left"){
                console.log("retrocedeu")
                 this.tamanhoRolagem-=cardSize;
                    
            }
            
            //validando se já chegou no limite de rolamente do carousel
            if( this.tamanhoRolagem>(components.length-cardsNaTela)*cardSize){
                 this.tamanhoRolagem=0;
            }else if( this.tamanhoRolagem<0){
                 this.tamanhoRolagem=(components.length-cardsNaTela)*cardSize;
            }
            carousel.scrollTo( this.tamanhoRolagem,0);
            console.log( "tamanho da rolagem = " + this.tamanhoRolagem)
        },
    }
}
</script>

<style>
.card img{
    height:13rem;
}
.card-title{
    font-size:1rem;
}
.carousel-content{
    transition:2s;
}
/* .carousel-content::-webkit-scrollbar {
  display: none;
} */
</style>
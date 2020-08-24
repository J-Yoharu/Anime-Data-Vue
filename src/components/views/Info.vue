<template>
  <div>
      <div class="container mt-4">

        <div class="row">
          
          <!-- Coluna da esquerda -->
          <div class="col bg-light m-0 p-0 text-left">

            <!-- badges de genero -->
            <div class="position-absolute m-0 p-0 text-center ">

                <router-link class="d-block mt-1 badge-i"
                  v-for="(genero,i) in data.genres" :key="i"
                  tag="span" :to="{
                    name:'generos',
                    params:{id:genero.mal_id},
                    query:{nome:genero.name}
                  }">
                  <span class="title">{{genero.name}}</span>
                  <span class="position-absolute molde"></span>
                </router-link>

            </div>
            <!-- badges de genero -->

            <!-- Video -->

            <iframe :src="data.trailer_url" style="width:100%;height:50vh"></iframe>
            <h2 class="m-3">Sinopse</h2>
            <p class=" m-3" style="text-align:justify">{{data.synopsis}}</p>
          </div>

            <!-- Video -->


          <!-- Coluna da direita -->
          <div class="col-md-3 p-0 m-0">
            <div class="dados mr-3 ml-3 bg-light">
              <div>
                <img :src="data.image_url" alt="Anime image" style="width:100%;height:18rem">
              </div>
               <ul style="text-align:left;list-style-type:none;padding-left:10px">
                 <li v-for="(propriedade,i) in propriedades" :key="i">
                   <strong>{{propriedade.nome}}</strong> :{{propriedade.valor}}
                 </li>
               </ul>
            </div>
          </div>

      
        </div>
        <div class="row bg-light mt-2">
          <div class="col">
            Openings
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props:['id'],
  data(){
    return{
      data:'',
      propriedades:'',
    }
  },
  methods:{
    async getAnime(url){
      let a = await axios.get(url); 
      this.data = a.data;
      this.propriedades = [
      {nome:'Titulo', valor: this.data.title},
      {nome:'Status',valor:this.data.airing == true?'Em lançamento':'Finalizado'},
      {nome:'Lançamento',valor:`${this.data.aired.prop.from.month}/${this.data.aired.prop.from.year}`},
      {nome:'Quantidade de ep',valor:this.data.episodes},
      {nome:'Duração ep',valor:this.data.duration},
      {nome:'Dia de ep',valor:this.data.broadcast},
      {nome:'Studio',valor:this.data.studios[0].name},
      
      ];
      console.log(this.data);
    },
  },
  mounted(){
    this.getAnime(`https://api.jikan.moe/v3/anime/${this.id}`); 
  }
}
</script>

<style>
.badge-t{
  transition: 1s;
}
.badge-i{
  font-size:1rem;
  background-color:rgb(0, 24, 41);
  border-left:1px solid white;
    border-top:1px solid white;
      border-bottom:1px solid white;
}
.badge-i:hover{
  transform:scale(1.1,1.1);
  cursor:pointer
}
.badge-i .title{
  color:white;
}
.badge-i .molde{
right:-10px;
width: 0;
height:0;
border-top: 12px solid rgb(0, 24, 41);;
border-bottom:12px solid rgb(0, 24, 41);;
border-right: 10px solid transparent;
border-left: 0px solid rgb(0, 24, 41);;
}

</style>
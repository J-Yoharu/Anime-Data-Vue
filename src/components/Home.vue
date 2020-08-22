<template>
      <!-- Div com o container da pesquisa e carousel  -->
      <div>
        <!-- container de pesquisa -->
        <div class="container-fluid" id="search" style="height:40rem;">
          <div class="row h-50 pt-5">
            <div class="col d-flex justify-content-center align-items-end">
              <span class="h1 anime" style="font-size:5rem;">Anime <span class="data">Data</span></span>
            </div>
          </div>

          <!-- Barra de pesquisa principal -->
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-5 d-flex">
              <div class="input-group input-group-lg" id="searchDefault">
                <input type="text" id="inputAnime" class="form-control" placeholder="Pesquisar">
                <div class="input-group-prepend">
                  <span class="input-group-text fa fa-search" @click="getAnimes('https://api.jikan.moe/v3/search/anime?q=Naruto')"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- eslint-disable -->
        <!-- container dos carousel -->
        <div class="container">
            <div class="row">
                <Carousel :arr="this.animesDaSemana"/>
            </div>
        </div>
      </div>

</template>

<script>
import Carousel from './Carousel';
import axios from 'axios';
export default {
    components:{Carousel},
    data(){
        return{
            animesDaSemana:'',
            animesTop:'',
            val:'',
        }
    },
    methods:{
        async getAnimes(url){
           var a = await axios.get(url);
           console.log(a);
           
           try{
             this.animesDaSemana =  a.data.results;
           }catch(e){
             console.log(e);
           }
           
        },
    },
    mounted(){
      //this.animesTop = this.getAnimes('https://api.jikan.moe/v3/top/anime/1/tv');
      //this.getAnimes('https://api.jikan.moe/v3/top/anime/1/tv');


    }
}
</script>

<style>

</style>
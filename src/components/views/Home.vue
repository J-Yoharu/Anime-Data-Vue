<template>
      <!-- Div com o container da pesquisa e carousel  -->
      <div class="home-content pb-3">
        <!-- container de pesquisa -->
        <div class="container-fluid bg-dark search" id="search" style="height:40rem;">
          <div class="row h-50 pt-5">
            <div class="col d-flex justify-content-center align-items-end">
              <span class="h1 anime" style="font-size:5rem;">Anime <span class="data">Data</span></span>
            </div>
          </div>

          <!-- Barra de pesquisa principal -->
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-5 d-flex">
              <div class="input-group input-group-lg" id="searchDefault">
                <input type="text" id="inputAnime" class="form-control" v-model="search" placeholder="Pesquisar">
                <div class="input-group-prepend">
                    <router-link :to="{
                      name:'search',
                      params:{id:this.search},
                      query:{teste:'testando'}
                      }" 
                      tag="span" class="input-group-text fa fa-search">
                    </router-link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- eslint-disable -->
        <!-- container dos carousel -->
        <div class="container bg-light mt-3">
            <div class="row">
                <Carousel :arr="this.animesDaSemana">
                  <h3 class="text-left">Animes de hoje </h3>
                </Carousel>
                <Carousel :arr="this.animesTop">
                  <h3 class="text-left">Animes top</h3>
                </Carousel>
            </div>
            <!-- <div class="row">
              <Carousel :arr="this.animesTop"/>
            </div> -->
        </div>
      </div>

</template>

<script>
import Carousel from '../Carousel';
import axios from 'axios';
export default {
    components:{Carousel},
    data(){
        return{
            animesDaSemana:'',
            animesTop:'',
            diaDaSemana:this.getWeekDay(),
            search:''
        }
    },
    methods:{
        async getAnimes(variable,url){
           let a = await axios.get(url); 

           switch(variable){
             case 'animesTop':
               this[variable] = a.data.top;
               break

            case 'animesDaSemana':
              this[variable] = a.data[this.diaDaSemana];
              break
           }
        },
        getWeekDay(){
          let week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
          let day = new Date().getDay();
          return week[day].toLowerCase();
        }

    },
    mounted(){
      //carregando os carousels
      this.getAnimes('animesTop','https://api.jikan.moe/v3/top/anime/1/tv');
      this.getAnimes('animesDaSemana',`https://api.jikan.moe/v3/schedule/${this.diaDaSemana}`);

    },
}
</script>

<style>

</style>
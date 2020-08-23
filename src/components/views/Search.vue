<template>
  <div class="container">
    <div class="row">
      <div v-for="(anime,index) in animeData" style="width:13rem;height:16rem;position:relative;" :key="index" class="card item d-inline-flex m-2 rounded shadow-lg border animated bounce">
        <img class="card-img-top" :src="anime.image_url" alt="">
        <div class="card-body p-0">
            <h4 class="card-title mt-2 text-center m-0">{{anime.title}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    props:['id'],
    data(){
        return{
            animeData:''
        }
    },
    methods:{
      async searchAnime(){
        let request = await axios(`https://api.jikan.moe/v3/search/anime?q=${this.id}`);
         this.animeData = request.data.results;
      }
    },
    
    mounted(){
     this.searchAnime()
    }
}
</script>

<style>

</style>
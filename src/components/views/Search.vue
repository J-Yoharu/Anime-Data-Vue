<template>
  <div class="container">
    <h1>{{id}}</h1>
    <div class="row">
      <Cards v-for="(anime,index) in animeData" :key="index" :data='anime'/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cards from '../Cards';

export default {
  components:{Cards},
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
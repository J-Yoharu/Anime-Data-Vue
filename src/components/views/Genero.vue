<template>
  <div class="genre">
      <h1>Categoria</h1>
      <div class="container">
          <div class="row">
              <Cards :data="data"/>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Cards from '../Cards'
// https://api.jikan.moe/v3/genre/anime/1
export default {
    components:{Cards},
    props:['id'],
    methods:{
        async getGenre(url){
            let a = await axios.get(url); 
            this.data = a.data.anime;
            console.log(this.data);
        }
    },
    data(){
        return{
            data:'',
        }
    },
    mounted(){
        this.getGenre(`https://api.jikan.moe/v3/genre/anime/${this.id}`);
    }
}

</script>

<style>
.genre{
    color:white;
}

</style>
<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light position-abolute d-absolute bg-light">
            
            <router-link :to="{name:'home'}" tag="li" class="nav-link anime">
                <h4> Anime <span class="data">Data</span></h4>
            </router-link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navBar">
                <ul class="navbar-nav mr-auto" id="navBar">
                    <router-link :to="{name:'home'}" tag="li" class="nav-link" active-class="active" exact>Home</router-link>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Generos</a>
                        <div class="dropdown-menu" style="width:30vw">
                            <div class="row">
                                <span v-for="(genero,i) in generos" :key="i">
                                    <router-link class="dropdown-item d-flex" tag="div" :to="{
                                        name:'generos',
                                        params:{id:i+1}
                                    }">{{genero}}
                                    </router-link>
                                </span>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
</template>

<script>
export default {
    data(){
        return{
            generos:'',
        }
    },
    methods:{

    },mounted(){
        this.generos = ['Ação','Aventura','Carros','Comedia','Demencia','Demônios'
                        ,'Mistério','Drama','Ecchi','Fantasia','Jogos','Hentai'
                        ,'Histórico','Horror','Kids','Mágia','Artes Marciais','Mecha'
                        ,'Música','Parodia','Samurai','Romance','Escolar','Sci-Fi','Shoujo'
                        ,'Shoujo Ai','Shounen','Shounen Ai','Espaço','Esportes','Super poder',
                        'Vampiro','Yaoi','Yuri','Harem','Slice of life','Supernatural','Militar',
                        'Policia','Pisicológico','Suspense','Seinen','Josei'];
    }
}
</script>

<style>
.active{
    color:black;
}

li {
    cursor:pointer
}
</style>
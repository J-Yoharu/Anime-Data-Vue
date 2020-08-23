<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light position-abolute d-absolute bg-light">
            <router-link :to="{name:'menu'}" tag="li" class="nav-link anime">
                <h4> Anime <span class="data">Data</span></h4>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navBar">
                <ul class="navbar-nav mr-auto" id="navBar">
                    <router-link :to="{name:'menu'}" tag="li" class="nav-link" active-class="active" exact>Home</router-link>
                    <router-link to="/animes" tag="li" class="nav-link" active-class="active" exact>Animes</router-link>
                    <router-link to="/calendario" tag="li" class="nav-link" active-class="active" exact>Calendário</router-link>

                </ul>

                <!-- Barra de pesquisa -->
                <form class="form-inline my-2 my-lg-0">
                    <div class="input-group" id="searchNav">
                    </div>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.active{
    color:black;
}
</style>
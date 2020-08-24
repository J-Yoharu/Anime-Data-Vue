<template>
    <span>
        <div v-for="(anime,index) in data" :key="index" style="min-width:13rem;width:13rem;min-height:16rem;height:16rem;position:relative;" class="card item d-inline-flex m-2 rounded shadow-lg border">
            <router-link :to="{
                name:'info',
                params:{id:anime.mal_id},
                }" tag="a">
            <img class="card-img-top" :src="anime.image_url" alt="">
            <div class="card-body p-0">
                <h4 class="card-title mt-2 text-center m-0">{{anime.title}}</h4>
                <slot></slot>
            </div>
            </router-link>
        </div>
    </span>
</template>

<script>
export default {
    props:['data'],
}
</script>

<style>
.card img{
    height:13rem;
}
.card-title{
    font-size:1rem;
    color:black;
    overflow: hidden;
}
.card:hover{
    transform: scale(1.1,1.1);
    cursor:pointer;
}
</style>
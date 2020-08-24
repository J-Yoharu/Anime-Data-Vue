<template>
    <div style="min-width:13rem;width:13rem;min-height:16rem;height:16rem;position:relative;" class="card item d-inline-flex m-2 rounded shadow-lg border">
    <router-link :to="{
        name:'info',
        params:{id:data.mal_id},
        }" tag="a">
    <img class="card-img-top" :src="data.image_url" alt="">
    <div class="card-body p-0">
        <h4 class="card-title mt-2 text-center m-0">{{data.title}}</h4>
    </div>
    </router-link>
</div>
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
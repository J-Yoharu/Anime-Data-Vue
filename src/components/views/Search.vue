<template>
  <div>
      <h1>{{this.id}}</h1>
  </div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            haha:''
        }
    },
    mounted(){
      console.log(this.id)  
    }
}
</script>

<style>

</style>
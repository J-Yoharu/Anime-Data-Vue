<template>
  <div>
      <h1>Info do naruto {{id}}</h1>
  </div>
</template>

<script>
export default {
  props:['id'],
  mounted(){
    console.log('montou');
  }
}
</script>

<style>

</style>
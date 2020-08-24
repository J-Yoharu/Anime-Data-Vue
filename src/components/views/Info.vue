<template>
  <div>
      <h1>Info de {{id}}</h1>
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
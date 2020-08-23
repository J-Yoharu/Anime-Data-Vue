<template>
  <div id="app">
    <Menu/>
    
    <transition>
      <router-view/>
    </transition>

    <Footer/>
  </div>
</template>

<script>
import Menu from './components/templates/Menu';
import Footer from './components/templates/Footer';
export default {
  components:{
    Menu,
    Footer
  },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:rgb(0, 24, 41);

}
.anime{
color:black;
font-weight: bold;
font-family:"Impact";
}
.data{
color:#d92145;
}
</style>

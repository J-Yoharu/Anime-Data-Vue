import Vue from 'vue';
import Router from 'vue-router';

//import Menu from './components/templates/Menu';
import Home from './components/views/Home';
import Search from './components/views/Search';
import Info from './components/views/Info';
import Genero from './components/views/Genero';
import error from './components/views/error'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            name:'home',
            path:'/',
            component:Home,
        },
        {
            name:'anime',
            path:'/anime/seach/:id',
            component:Search,
            props:true,
        },
        {
            name:'info',
            path:'/animes/:id/',
            component:Info,
            props:true
         },
         {
            name:'generos',
            path:'/generos/:id',
            component:Genero,
            props:true,
         },
         {
            path:'*',
            component:error,
        }
    ]
});
import Vue from 'vue';
import Router from 'vue-router';

//import Menu from './components/templates/Menu';
import Home from './components/views/Home';
import Search from './components/views/Search';
import Info from './components/views/Info'

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
            name:'search',
            path:'/:id',
            component:Search,
            props:true,
            
        },
        {
            name:'info',
            path:'/info/:id',
            component:Info,
            props:true
        }
    ]
});
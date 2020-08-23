import Vue from 'vue';
import Router from 'vue-router';

//import Menu from './components/templates/Menu';
import Home from './components/views/Home';
import Search from './components/views/Search';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            name:'index',
            path:'/',
            component:Home,
        },
        {
            name:'search',
            path:'/search/:id',
            component:Search,
            props:true,
        },
    ]
});
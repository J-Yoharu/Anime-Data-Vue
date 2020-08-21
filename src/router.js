import Vue from 'vue';
import Router from 'vue-router';

//import Menu from './components/templates/Menu';
import Home from './components/Home';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Home,
        },
    ]
});
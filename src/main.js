import Vue from 'vue'
import App from './App.vue'
import Router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import'jquery';
Vue.config.productionTip = false;
new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')

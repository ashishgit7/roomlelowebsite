import Vue from 'vue'
import App from './App.vue'
// import { BootstrapVue } from 'bootstrap-vue'
// import { jquery } from 'vue-jquery'
// import { popperjs } from 'vue-popperjs'
// import Popper from 'popper.js'
import navBar from './components/nav-bar.vue'
import Content from './components/contentPage.vue'
import Filter from './components/filter.vue'
import Service from './components/services.vue'
import Property from './components/properties.vue'
import Footer from './components/footer.vue'
import ownerEntry from './components/ownerEntry.vue'
// import Vuex from 'vuex'
// import Portal from './components/portal.vue'
import VueRouter from 'vue-router'
import Routes from './router/index.js'
// import store from './components/vuex/store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js'
import VueCarousel from '@chenfengyuan/vue-carousel';
import checkbox from 'vue-material-checkbox'
Vue.use(checkbox)

Vue.use(VueCarousel);

// import VueFire from 'vuefire'
// Vue.use(VueFire)
// global.jQuery = jquery;
// global.Popper = popperjs;

Vue.config.productionTip = false

Vue.use(VueRouter);

const router= new VueRouter({
    routes:Routes,
    mode: 'history',
  
  
});



// Vue.use(BootstrapVue)
// Vue.use(popperjs)
// Vue.use(jquery)
// Vue.use(Popper)

Vue.component('navbar',navBar);
Vue.component('content-page',Content);
Vue.component('Filterr',Filter);
Vue.component('service',Service);
Vue.component('property',Property);
Vue.component('footeR',Footer);
Vue.component('ownerEntry',ownerEntry);
// Vue.component('portal',Portal)

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})

import searchresult from '../components/searchresult.vue';
import home from '../components/home.vue';
import detail from '../components/detail.vue';
// import portal from '../components/portal.vue';
import OTPBox from '../components/OTPBox.vue';
import login from '../components/login.vue';
import propertyRegister from '../components/propertyRegister.vue';
// import dashboard from '../components/dashboard.vue';

export default [
    // {path:'/' ,component:app },
    {path:'/result',name:'result',component: searchresult,props: true},
    {path:'/',component: home},
    {path:'/detail:id',component: detail},
    // {path:'/portal',component: portal},
    {path:'/OTPBox', name:'OTPBox',component: OTPBox},
    {path:'/propertyRegister', name:'propertyRegister',component: propertyRegister},
    {path:'/login', name:'login',component: login},
    
]
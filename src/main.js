import {createApp} from "vue";
import App from './App.vue'
import {createRouter,createWebHistory} from "vue-router"
// import LoginPage from './components/LoginPage.vue'
import LoginPage2 from './Views/loginpage2.vue'
import HomePage from "./Home.vue"
import gAuthPlugin from 'vue3-google-oauth2'

const routes = [
    {
        path:"/",
        component:HomePage
    },
    {
        path:"/login",
        component:LoginPage2
    }
];
const router= createRouter({
    history: createWebHistory(),
  
   
    routes,
});
createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'

// importar VUEs 
import App from './App.vue'
import Restaurantes from './components/Restaurantes.vue'
import Restaurante from './components/RestauranteInfo.vue'

//createApp(App).mount('#app')

const app = createApp(App)

/** criação de componentes para botoes */
app.component('link-home', Restaurantes);
app.component('link-restaurante', Restaurante);
/** fim de criação de componentes para botoes */

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Restaurantes },
        { path: '/restaurante', component: Restaurante },
        { path: '/restaurante/:id', name: 'FichaRestaurante', component: Restaurante }
        /*{ path: '/food', component: FoodItems },
        { path: '/food/:id', name: 'ShowFood', component: FoodItems },*/
    ]
});

app.use(router);

app.mount('#app')

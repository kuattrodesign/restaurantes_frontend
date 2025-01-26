
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
//import './style.css'

// importar VUEs 
import App from './App.vue'
import Restaurantes from './components/Restaurantes.vue'
import Restaurante from './components/RestauranteInfo.vue'
import RestauranteEspecialidades from './components/RestauranteEspecialidades.vue'
import RestauranteBebidas from './components/RestauranteBebidas.vue'

//createApp(App).mount('#app')

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Restaurantes },
        { path: '/restaurante', component: Restaurante },
        { path: '/restauranteespecialidades', component: RestauranteEspecialidades },
        { path: '/restaurantebebidas', component: RestauranteBebidas },
        { path: '/restaurante/:id', name: 'FichaRestaurante', component: Restaurante },
        { path: '/restauranteespecialidades/:id', name: 'RestauranteEspecialidades', component: RestauranteEspecialidades },
        { path: '/restaurantebebidas/:id', name: 'RestauranteBebidas', component: RestauranteBebidas }
    ]
});

app.use(router);
app.mount('#app')

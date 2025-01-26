
<template>
  <div class="menu">
    <nav>
        <router-link to="/">home</router-link>  
        <router-link
            :to="{
                name: 'FichaRestaurante',
                params: {
                id: this.$route.params.id
                }
            }">INFO # {{ this.$route.params.id }}</router-link>
        <router-link
            :to="{
                name: 'RestauranteEspecialidades',
                params: {
                id: this.$route.params.id
                }
            }">ESPECIALIDADES</router-link>
        <router-link
            :to="{
                name: 'RestauranteBebidas',
                params: {
                id: this.$route.params.id
                }
            }">BEBIDAS</router-link>

    </nav>
  </div>
</template>


<style scoped>
  /** os meus estilos */
  .menu, .info { width: 90%; max-width:600px; margin: 0 auto;}

  nav { display:flex; justify-content: center; }
  nav > * {
    flex:1; 
    text-align:center;
    margin: 15px;
    text-transform:uppercase;
    font-weight: bold;
  } 

  nav > a { padding:10px; color : #fff !important; margin:10px; transition-duration: 0.5s; }
  nav > a:hover { padding:10px; background: #fff; color: #000 !important; transition-duration: 0.5s; }

</style>

<script>
export default {

}
</script>

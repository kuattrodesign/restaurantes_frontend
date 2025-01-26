
<template>
<!--
  <div class="menu">
    <nav>
      <router-link to="/">home</router-link>  
      <router-link to="/restaurante">restaurante</router-link>
      <router-link to="/restauranteespecialidades">especialidades</router-link>
      <router-link to="/restaurantebebidas">bebidas</router-link>
    </nav>
  </div>
-->
  <div class="info">
    <router-view></router-view>
  </div>  


</template>

<style scoped>
  /** os meus estilos */
  .menu, .info { width: 90%; max-width:1000px; margin: 0 auto;}

  nav { display:flex; justify-content: center; }
  nav > * {
    flex:1; 
    text-align:center;
    margin: 15px;
    text-transform:uppercase;
    font-weight: bold;
  } 

</style>

<script>
/** os meus scripts */
</script>

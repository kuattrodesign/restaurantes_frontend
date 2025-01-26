
<template>
  
  <arbitrary />

  <div>
    <!-- o meu template -->
    <button @click="activeComp = 'link-home'">Home</button>
    <button @click="activeComp = 'link-restaurante'">Restaurante</button><br>   
  </div>
  <div>
    <component :is="activeComp"></component>
  </div>  
</template>

<style scoped>
  /** os meus estilos */
</style>

<script>
/** os meus scripts */
import Home from './components/Home.vue';

export default {
  data() {
    return {
      message: 'This is some text',
      data: this.fetchData(),
      activeComp: ''
    };
  },
  methods: {
    async fetchData() {      
      const response = await fetch("http://localhost:5000/products/"); 
      this.data = await response.json();
    }  , 
    async fetchData2() {      
      const response = await fetch("http://localhost:5000/products/"); 
      this.data = null;
    }   
  },
  components: {
    'arbitrary': Home,
  }  
};  
</script>

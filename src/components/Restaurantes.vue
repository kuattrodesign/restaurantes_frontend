
<template>
    <h1>Lista de Restaurantes</h1>

    <div class="row">

      <div class="col-md-12">
        <h1>Minha Localização</h1>
    <p v-if="error">{{ error }}</p>
    <p v-else-if="latitude && longitude">
      Latitude: {{ latitude }} <br />
      Longitude: {{ longitude }}
    </p>
    <p v-else>Obtendo localização...</p>
      </div>    
    
      <div class="col-md-6">
        <p v-for="restaurante in restaurantes.rests" :key="restaurante.id">
            <router-link 
                :to="{
                    name: 'FichaRestaurante',
                    params: {
                        id: restaurante.id
                    }
                }">
                    <sup>({{ restaurante.id }})</sup> {{ restaurante.nome }}
            </router-link>
        </p>        
      </div>

      <div class="col-md-6 borderX">
        <pre v-if="restaurantes">Json Returned: <br><br><i>{{ restaurantes }}</i></pre>
      </div> 

    </div>
</template>

<style scoped>
    h1 {text-align:center; color: #fff; margin:50px 10px;}
    pre { color: #ccc; }
    .borderX { border:1px solid #ccc; padding:25px;}
    p > * {color : #fff !important; margin:10px; transition-duration: 0.5s; }
    p > a:hover { padding:10px; background: #fff; color: #000 !important; transition-duration: 0.5s; }
</style>
  
<script>
	/*function getLocation() {
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	  } else { 
		//lat_txt.innerHTML = "-";
		//lng_txt.innerHTML = "-";
		//$("#lat_field").val("-");
		//$("#lng_field").val("-");
	  }
	}

	function showPosition(position) {
		//x.innerHTML = "Latitude: " + position.coords.latitude +  "<br>Longitude: " + position.coords.longitude;
		alert(position.coords.latitude + ", " + position.coords.longitude);
    //lat_txt.innerHTML = position.coords.latitude;
		//lng_txt.innerHTML = position.coords.longitude;
		//$("#lat_field").val(position.coords.latitude);
		//$("#lng_field").val(position.coords.longitude);  
	}
  getLocation();*/

export default {
  data() {
    return {
      restaurantes: this.fetchData(),
      latitude: null,
      longitude: null,
      error: null,
    };
  },
  methods: {
    async fetchData() {      
      //const response = await fetch("http://localhost:5000/products/"); 
      //const response = await fetch("http://localhost:3000/restaurantes"); 
      const response = await fetch("https://192.168.1.134:3000/restaurantes"); 
      this.restaurantes = await response.json();
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            alert(position.coords.latitude);
          },
          (err) => {
            this.error = "Erro ao obter localização: " + err.message;
          }
        );
      } else {
        this.error = "Geolocalização não é suportada pelo navegador.";
      }
    },
  },
  mounted() {
    this.getLocation();
  },
};
</script>

<template>
  <div>
    <h1>Minha Localização</h1>
    <p v-if="error">{{ error }}</p>
    <p v-else-if="latitude && longitude">
      Latitude: {{ latitude }} <br />
      Longitude: {{ longitude }}
    </p>
    <p v-else>Obtendo localização...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      error: null,
    };
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
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

<style scoped>
h1 {
  color: #42b983;
}
</style>

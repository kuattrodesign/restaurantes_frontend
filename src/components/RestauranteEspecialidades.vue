<template>

    <h1 v-if="inforestaurante">{{ inforestaurante.rests.nome }}</h1>
    <h1>Especialidades do Restaurante</h1>

    <menuzone />


        <div class="row grid mt-5">

          <!-- INICIO DA SEÇÃO A REPLICAR PELOS REGISTOS DEVOLVIDOS-->
          <div class="col-sm-6 col-lg-4 all ">
            <div class="box">
              <div>
                <div class="detail-box">
                    <p class="tipoprato">
                    tipo de prato
                    </p>
                  <h5>
                    prato
                  </h5>
                  <p>
                    descritivo do prato
                  </p>
                  <div class="options">
                    <h6>
                      11&euro;
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- FIM DA SEÇÃO A REPLICAR PELOS REGISTOS DEVOLVIDOS-->
          
        </div>



</template>

<style scoped>
    h1 {text-align:center; color: #fff; margin:50px 10px;}
    .tipoprato { font-size: 0.8rem; font-style: italic; color: #fc0; }
    .box { color: #fff !important; }
</style>

<script>
import Menu from './RestauranteMenu.vue';
export default {
    data() {
        return {
            inforestaurante: null,
        };
    },    
    components: {
        'menuzone': Menu,
    } 
}
</script>
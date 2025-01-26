
<template>
    
    <h1 v-if="inforestaurante">{{ inforestaurante.rests.nome }}</h1>
    <h1>Info do Restaurante</h1>

    <menuzone />

    <!--
    <pre style="color: #f00;" v-if="inforestaurante">{{ inforestaurante }}</pre>
    <pre style="color: #0f0;" v-if="dataX">{{ dataX.rests }}</pre>
    -->
    
    <footer class="footer_section">
        <div class="container">
        <div class="row">


            <div class="col-md-4 footer-col">
                <div class="footer_detail">
                    <a href="" class="footer-logo">
                        {{ inforestaurante.rests.nome }}
                    </a>
                    <p>
                        <i class="fa fa-map-marker" aria-hidden="true"></i> {{ inforestaurante.rests.morada }}
                    </p>

                    <div class="footer_social">
                        <a href="">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                    </div>

                </div>
            </div>
                        
            <div class="col-md-4 footer-col">
                <div class="footer_contact">
                    <h4>
                    Contactos
                    </h4>
                    <div class="contact_link_box">
                        <a href="">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <span>
                            Call +01 1234567890
                            </span>
                        </a>
                        <a href="">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <span>
                            demo@gmail.com
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-md-4 footer-col">
                <h4>
                    Horário do estabelecimento
                </h4>
                <p>
                    Domingo : 10h00 - 20h00
                </p>
            </div>
        </div>

        </div> 
    </footer>  

</template>

<style scoped>
    h1 {text-align:center; color: #fff; margin:50px 10px;}
</style>

<script>

import Menu from './RestauranteMenu.vue';

export default {
    data() {
        return {
            inforestaurante: this.fetchData(),
            dataX: this.fetchDataX(),
        };
    },
    methods: {
        async fetchData() {      
            const response = await fetch("http://localhost:3000/restaurante/" + this.$route.params.id); 
            this.inforestaurante = await response.json();
        },
        async fetchDataX() {      
            const response = await fetch("http://localhost:3000/restaurante/" + this.$route.params.id); 
            this.dataX = await response.json();
        } 

    },
    components: {
        'menuzone': Menu,
    }      
};
</script>

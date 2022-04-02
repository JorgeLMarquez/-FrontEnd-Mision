<template>
<div class="container">

   <div class="header clearfix"> <!----Header------>
      <nav>
         <ul class="nav nav-pills pull-right">
            <li role="presentation" title="Inicio">
               <router-link to="/" active-class="menuActivo">Inicio</router-link> 
            </li>
            <li role="presentation" title="Pastelero">
               <router-link to="/pastelero" active-class="menuActivo" >Pastelero</router-link> 
            </li>
            <li role="presentation" title="Acerca de">
               <router-link to="/acercade" active-class="menuActivo" >Acerca de</router-link> 
            </li>
         </ul>
      </nav>
      <h3 class="text-muted">Cake-It</h3>
   </div><!----Header------>
   <router-view/>
</div>
</template>

<script>
   
   export default {
     name: 'App',
     components: {

     }
   }
</script>

<style>
   @import './assets/css/bootstrap.css';
   @import './assets/css/jumbotron-narrow.css';
   @import './assets/css/estilos.css';
</style>
<template>
   <div class="jumbotron">
      <h1><img src="../assets/images/logo.png" alt="logo" style="width: 4em; border-radius: 10%;"></h1><br>
      <p class="lead"><b>Horario de atención:</b> 10:00 - 20:00</p><br>
      <p class="lead"><b>Telefóno:</b> 5527361890&ensp;&ensp;<b>Dirección:</b> Pueblo Paleta #123</p><br>
      <p><a class="btn btn-lg btn-success" @click="$router.push('pedido')" role="button">Hacer Pedido</a></p>
   </div>
</template>
<script>
   export default {
       name:'JumbotronCom'
   }
</script>
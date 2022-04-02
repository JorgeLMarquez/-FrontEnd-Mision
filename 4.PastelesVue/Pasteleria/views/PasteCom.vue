<template>
       <h1>Pastelero</h1>

       

  <form class="pedido.js">

    <section class="form-group" id="usuario">
        <label for="Nombre">Nombre:</label>
        <input type="text" id="Nombre" name="Nombre" placeholder="Nombre" class="form-control"><br>
   </section>


    <!--************************Sabores**************************************--->
    <h2 class="formulario">Cantidad de Sabores</h2>

    <div class="form-inline">
       <label class="form-check-label" for="tres leches">
            Pastel de Tres Leches
        </label>
        <input type="number" name="Numtresleches"  id="Ntresleches" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px" readonly>

        <br><br>
        <label class="form-check-label" for="frutas">
            Pastel de Frutas 
        </label>&ensp;&ensp;&ensp;&ensp;
        <input type="number" name="Numfrutas"  id="Nfrutas" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px" readonly>

        <br><br>
        <label class="form-check-label" for="choco">
        Pastel de Chololate
        </label>&ensp;
        <input type="number" name="Numchoco"  id="Numchoco" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px" readonly>

        <br><br>
        <label class="form-check-label" for="lemon">
            Pastel de Limón
        </label>&ensp;&ensp;&ensp;&ensp;
        <input type="number" name="Numlemon"  id="Numlemon" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px" readonly>

        <br><br>
        <label class="form-check-label" for="fresa">
            Pastel de Fresa
        </label>&ensp;&ensp;&ensp;&ensp;
        <input type="number" name="Numfresa"  id="Numfresa" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px" readonly>
        <!--************************Sabores**************************************--->
 

        <!--************************Adornos**************************************--->
        <h2 class="formulario">Cantidad de Paquetes</h2>
        <label class="form-check-label" for="Sorprendas">
            Paquete Sorprendas
        </label>&ensp;&ensp;&ensp;
        <input type="number" name="Numfresa"  id="Numfresa" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px" readonly>

        <br><br>
        <label class="form-check-label" for="Cases">
          Paquete Cases
        </label>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        <input type="number" name="Numfresa"  id="Numfresa" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px" readonly>
        

        <br><br>
        <label class="form-check-label" for="Reconcilies">
          Paquete Reconcilies
        </label>&ensp;&ensp;&ensp;&ensp;
        <input type="number" name="Numfresa"  id="Numfresa" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px" readonly>

        <br><br>
        <label class="form-check-label" for="Reenconforte">
          Paquete Reenconfortes
        </label>&ensp;
        <input type="number" name="Numfresa"  id="Numfresa" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px" readonly>

        <!--************************Adornos**************************************--->
        <br><br>
        <div class="col-md-12 text-center botones">
            <input type="submit" class="btn btn-primary text-center" style= "mmargin: 5px">
            <input type="reset" class="btn btn-second text-center" style= "margin: 5px">
        </div>
   </div>
     

      </form>
   
</template>
<script>
   export default {
       name:'PasteCom'
   }
</script>
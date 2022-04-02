<template>

<h1 class="formulario">Datos del cliente</h1>


  <form class="pedido.js">

    <section class="form-group" id="usuario">
    <!--************************Datos de usuario**************************************--->
        <label for="Nombre">Nombre:</label>
        <input type="text" id="Nombre" name="Nombre" placeholder="Nombre" class="form-control"><br>
        
        <label for="Numero">Número Telefónico:</label>
        <input type="number" name="Numero"  id="Numero" placeholder="+52" class="form-control"><br>

        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" placeholder="correo@example.com" class="form-control">
        <small id="emailHelp" class="form-text text-muted">Resguardaremos toda la información sensible.</small><br>    
        <!--************************Datos de Usuario**************************************--->
   </section>


    <!--************************Sabores**************************************--->
    <h2 class="formulario">Selecciona un sabor o Combínalos</h2>

    <div class="form-inline">
       <input type="checkbox" id="tresleches" name="tresleches" value="tresleches" class="form-check-input" style= "margin: 5px">
       <label class="form-check-label" for="tres leches">
            Pastel de Tres Leches
        </label>
        <input type="number" name="Numtresleches"  id="Ntresleches" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px">

        <br><br>
        <input type="checkbox" id="frutas" name="frutas" value="frutas" class="form-check-input" style= "margin: 5px">
        <label class="form-check-label" for="frutas">
            Pastel de Frutas 
        </label>&ensp;&ensp;&ensp;&ensp;
        <input type="number" name="Numfrutas"  id="Nfrutas" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px">

        <br><br>
        <input type="checkbox" id="choco" name="choco" value="choco" class="form-check-input" style= "margin: 5px">
        <label class="form-check-label" for="choco">
        Pastel de Chololate
        </label>&ensp;
        <input type="number" name="Numchoco"  id="Numchoco" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px">

        <br><br>
        <input type="checkbox" id="lemon" name="lemon" value="lemon" class="form-check-input" style= "margin: 5px">
        <label class="form-check-label" for="lemon">
            Pastel de Limón
        </label>&ensp;&ensp;&ensp;&ensp;
        <input type="number" name="Numlemon"  id="Numlemon" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px">

        <br><br>
        <input type="checkbox" id="fresa" name="fresa" value="fresa" class="form-check-input" style= "margin: 5px">
        <label class="form-check-label" for="fresa">
            Pastel de Fresa
        </label>&ensp;&ensp;&ensp;&ensp;
        <input type="number" name="Numfresa"  id="Numfresa" placeholder="¿Cuántos?" class="form-control" style= "margin: 5px">
        <!--************************Sabores**************************************--->


        <!--************************Adornos**************************************--->
        <h2 class="formulario">Selecciona un adorno o Combínalos</h2>
        <input type="checkbox" id="Sorprendas" name="Sorprendas" value="Sorprendas" class="form-check-input" style= "margin: 5px">
        <label class="form-check-label" for="Sorprendas">
            Paquete Sorprendas
        </label>

        <br><br>
        <input type="checkbox" id="Cases" name="Cases" value="Cases" class="form-check-input" style= "margin: 5px">
        <label class="form-check-label" for="Cases">
          Paquete Cases
        </label>
        

        <br><br>
        <input type="checkbox" id="Reconcilies" name="Reconcilies" value="Reconcilies" class="form-check-input" style= "margin: 5px">
        <label class="form-check-label" for="Reconcilies">
          Paquete Reconcilies
        </label>

        <br><br>
        <input type="checkbox" id="Reenconfortes" name="Reenconfortes" value="Reenconfortes" class="form-check-input" style= "margin: 5px">
        <label class="form-check-label" for="Reenconforte">
          Paquete Reenconfortes
        </label>

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
       name:'AcercaCom'
   }
</script>

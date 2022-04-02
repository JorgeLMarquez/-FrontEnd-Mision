<template>
   <div>
         <JumbotronCom />
         <FooterCom />
   </div>
</template>
<script>
   import JumbotronCom from '../components/JumbotronCom.vue'
   import FooterCom from '../components/FooterCom.vue'
   
   export default {
     name: 'HomeView',
     components: {
       JumbotronCom,
       FooterCom
     }
   }
</script>


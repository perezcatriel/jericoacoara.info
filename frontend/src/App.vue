<template>
  <div id="app">
    <CxHeader/>
    <router-view />
    <CxFooter />
  </div>
</template>

<script>
import CxFooter from './components/CxFooter.vue';
import CxHeader from './components/CxHeader.vue';

export default {
  name: 'App',
  components: {
    CxHeader,
    CxFooter
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Estilos adicionales para el contenido principal si es necesario */
</style>

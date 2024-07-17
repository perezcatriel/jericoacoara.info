<template>
  <div id="app">
    <CxHeader />
    <Home/>
    <router-view />
    <CxFooter />
  </div>
</template>

<script>
import CxHeader from './components/CxHeader.vue';
import CxFooter from './components/CxFooter.vue';
import Home from './views/HomePage.vue';

export default {
  components: {
    CxHeader,
    Home,
    CxFooter
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

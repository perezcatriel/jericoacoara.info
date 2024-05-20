<template>
  <CxHeader msg="Jeri Info"/>
  <CxNews />
</template>

<script>
import CxHeader from './components/CxHeader.vue'
import CxNews from './components/CxNews.vue'

export default {
  name: 'App',
  components: {
    CxHeader,
    CxNews
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
 font-family: monospace;
}
</style>

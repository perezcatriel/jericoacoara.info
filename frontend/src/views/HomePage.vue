<template>
  <div>
    <CxHeroSection />
    <CxHighLights />
    <CxToursAndActivities />
    <CxTestimonials />
  </div>
</template>

<script>
import CxHeroSection from '@/components/CxHeroSection.vue';
import CxHighLights from '@/components/CxHighLights.vue';
import CxToursAndActivities from '@/components/CxToursAndActivities.vue';
import CxTestimonials from '@/components/CxTestimonials.vue';

export default {
  components: {
    CxHeroSection,
    CxHighLights,
    CxToursAndActivities,
    CxTestimonials
  }
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para Home */
</style>

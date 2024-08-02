<template>
  <div>
    <CxHeroSection />
    <CxHighLights />
    <CxRentals />
    <CxTestimonials />
    <CxToursAndActivities />
  </div>
</template>

<script>
import CxHeroSection from "@/components/CxHeroSection.vue";
import CxHighLights from "@/components/CxHighLights.vue";
import CxToursAndActivities from "@/components/CxToursAndActivities.vue";
import CxTestimonials from "@/components/CxTestimonials.vue";
import CxRentals from "@/components/CxRentals.vue";

export default {
  components: {
    CxHeroSection,
    CxHighLights,
    CxToursAndActivities,
    CxTestimonials,
    CxRentals,
  },
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para Home */
</style>

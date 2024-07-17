<template>
  <div class="testimonials">
    <h2>Opiniones</h2>
    <div class="testimonials-list">
      <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
        <CxStarRating :rating="testimonial.rating" />
        <p>{{ testimonial.comment }}</p>
        <p><strong>{{ testimonial.name }}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import CxStarRating from './CxStarRating.vue';

export default {
  components: {
    CxStarRating
  },
  data() {
    return {
      testimonials: [
        { id: 1, name: 'Juan Pérez', comment: '¡Un lugar maravilloso!', rating: 5 },
        { id: 2, name: 'María García', comment: 'Increíble experiencia.', rating: 4 },
        // Agrega más testimonios según sea necesario
      ]
    };
  }
};
</script>

<style scoped>
.testimonials {
  text-align: center;
  padding: 2rem;
}
.testimonials-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testimonial {
  margin: 1rem;
  width: 80%;
  border: 1px solid #ccc;
  padding: 1rem;
  background-color: #f9f9f9;
}
</style>

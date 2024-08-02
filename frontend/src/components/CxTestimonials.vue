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
  width: 90vw;
  max-width: 1200px;
  margin: auto;
}

.testimonials-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial {
  margin: 1rem 0;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.testimonial:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.testimonial p {
  margin: 0.5rem 0;
}

.testimonial strong {
  font-size: 1.1rem;
}

/* Estilos específicos para dispositivos móviles */
@media (max-width: 768px) {
  .testimonials {
    padding: 1rem;
  }

  .testimonial {
    width: 90%;
    max-width: none;
  }
}
</style>

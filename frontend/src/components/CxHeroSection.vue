<template>
  <div class="hero-section">
    <div class="hero-image">
      <img :src="heroImage" alt="Jericoacoara" />
      <div class="overlay"></div>
    </div>
    <div class="hero-content">
      <h1>Descubre Jericoacoara</h1>
      <p>Un paraíso escondido en Brasil</p>
      <button @click="exploreMore" aria-label="Explora más sobre Jericoacoara">
        Explora Más
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroImage: require("@/assets/photos/dunapordosol.jpg"), // Ruta de la imagen destacada
    };
  },
  methods: {
    exploreMore() {
      this.$router.push("blog");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.hero-section {
  position: relative;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-image {
  position: relative;
}

.hero-image img {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Filtro negro semitransparente */
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.hero-content button {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.hero-content button:hover {
  background-color: #0056b3;
}

/* Estilos solo para tamaño desktop */
@media screen and (min-width: 768px) {
  .hero-content h1 {
    font-size: 4rem;
  }

  .hero-content p {
    font-size: 2rem;
  }

  .hero-content button {
    padding: 1rem 2.5rem;
    font-size: 1.25rem;
  }
}
</style>

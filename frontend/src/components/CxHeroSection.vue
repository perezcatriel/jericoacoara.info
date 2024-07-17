<template>
  <div class="hero-section">
    <div class="hero-image">
      <img :src="heroImage" alt="Jericoacoara" />
      <div class="overlay"></div> <!-- Filtro transparente -->
    </div>
    <div class="hero-content">
      <h1>Descubre Jericoacoara</h1>
      <p>Un paraíso escondido en Brasil</p>
      <button @click="exploreMore">Explora Más</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroImage: require('@/assets/logo.jpeg') // Reemplazar con la ruta de la imagen destacada
    };
  },
  methods: {
    exploreMore() {
      // Lógica para navegar a la sección de exploración
    }
  }
};
</script>

<style scoped>
.hero-section {
  position: relative;
  text-align: center;
  color: white;
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
  z-index: 1; /* Asegura que el contenido esté delante del filtro */
}

.hero-content h1 {
  font-size: 3rem; /* Ejemplo: ajusta el tamaño del título según necesites */
  margin-bottom: 0.5rem; /* Ejemplo: ajusta el margen inferior según necesites */
}

.hero-content p {
  font-size: 1.5rem; /* Ejemplo: ajusta el tamaño del párrafo según necesites */
  margin-bottom: 1rem; /* Ejemplo: ajusta el margen inferior según necesites */
}

.hero-content button {
  padding: 0.75rem 2rem; /* Ejemplo: ajusta el padding del botón según necesites */
  font-size: 1rem; /* Ejemplo: ajusta el tamaño de la fuente del botón según necesites */
  border-radius: 10px;
  background-color: #007bff; /* Ejemplo: color de fondo del botón */
  color: white; /* Ejemplo: color del texto del botón */
  cursor: pointer;
}

.hero-content button:hover {
  background-color: #0056b3; /* Ejemplo: color de fondo del botón al pasar el mouse */
}
</style>

<template>
  <div class="card">
    <div class="card-image">
      <img :src="image" :alt="name" />
    </div>
    <div class="card-content">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <button @click="handleClick">Ver Más</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    image: String,
    onClick: Function
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 300px; /* Tamaño fijo para todas las tarjetas */
  height: 400px; /* Tamaño fijo para todas las tarjetas */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  text-align: center;
  margin: 1rem;
}

.card-image {
  width: 100%;
  height: 60%; /* Ajustar altura del contenedor de la imagen */
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
  height: 40%; /* Ajustar altura del contenido */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-content h3 {
  margin: 0.5rem 0;
}

.card-content p {
  margin: 0.5rem 0;
}

.card-content button {
  margin-top: auto; /* Espacio entre el botón y el contenido */
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-content button:hover {
  background-color: #0056b3;
}
</style>

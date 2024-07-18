<template>
  <div class="rentals">
    <h2>Alquileres Disponibles</h2>
    <div class="rentals-list">
      <div class="rental" v-for="rental in rentals" :key="rental.id">
        <div class="image-container">
          <img :src="rental.image" :alt="rental.name" />
        </div>
        <h3>{{ rental.name }}</h3>
        <p>{{ rental.description }}</p>
        <p>Precio por noche: {{ rental.price }} $</p>
        <button @click="bookRental(rental.id)">Reservar Ahora</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rentals: [
        { id: 1, name: 'Casa en la Playa', description: 'Hermosa casa frente al mar.', price: 100, image: require('@/assets/photos/casafrente.jpg') },
        { id: 2, name: 'Apartamento en el Centro', description: 'Cómodo apartamento en el corazón de la ciudad.', price: 80, image: require('@/assets/photos/casacuarto.jpg') },
        // Agrega más alquileres según sea necesario
      ]
    };
  },
  methods: {
    bookRental(id) {
      // Lógica para reservar el alquiler con el ID proporcionado
      console.log(`Reservando el alquiler con ID ${id}`);
    }
  }
};
</script>

<style scoped>
.rentals {
  text-align: center;
  padding: 2rem;
  width: 80vw;
  margin: auto;
}
.rentals-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.rental {
  margin: 1rem;
  width: 300px;
}
.image-container {
  width: 100%;
  height: 200px; /* Altura fija para las imágenes */
  overflow: hidden; /* Asegura que las imágenes no se salgan del contenedor */
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta la imagen para que cubra el contenedor sin distorsionarse */
}
.rental button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ff6347;
  border: none;
  color: white;
  cursor: pointer;
}
</style>

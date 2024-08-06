<template>
  <div class="rentals" id="rentals">
    <h2>Alquileres Disponibles</h2>
    <div class="rentals-list">
      <CxCard
        v-for="rental in rentals"
        :key="rental.id"
        :name="rental.name"
        :description="rental.description"
        :image="rental.image"
        :url="rental.url"
      />
    </div>
  </div>
</template>

<script>
import CxCard from './CxCard.vue'; // Asegúrate de que la ruta es correcta

export default {
  components: {
    CxCard
  },
  data() {
    return {
      rentals: [
        {
          id: 1,
          name: "Casa en la Playa",
          description: "Hermosa casa frente al mar.",
          price: 100,
          image: require("@/assets/photos/casafrente.jpg"),
          url: "https://airbnb.com/h/casadehuespedesjeri"
        },
        {
          id: 2,
          name: "Apartamento en el Centro",
          description: "Cómodo apartamento en el corazón de la ciudad.",
          price: 80,
          image: require("@/assets/photos/casacuarto.jpg"),
          url: "https://airbnb.com/h/casadehuespedesjeri1"
        },
        // Agrega más alquileres según sea necesario
      ],
    };
  }
};
</script>

<style scoped>
.rentals {
  text-align: center;
  padding: 2rem;
  width: 90vw;
  margin: auto;
}

.rentals-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

<template>
  <div class="tours-activities">
    <h2>Tours y Actividades</h2>
    <div class="tours">
      <CxCard
        v-for="tour in tours"
        :key="tour.id"
        :name="tour.name"
        :description="tour.description"
        :price="tour.price"
        :image="tour.image"
        :onClick="() => bookTour(tour.id)"
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
      tours: [
        {
          id: 1,
          name: "Playa Jericoacoara",
          description: "Una playa increíble.",
          price: "$100",
          image: require("@/assets/photos/dunapordosol.jpg"),
        },
        {
          id: 2,
          name: "Duna del Pôr do Sol",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/photos/dunapordosol.jpg"),
        },
        {
          id: 3,
          name: "Lagoa do Praíso",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/logo.jpeg"),
        },
        {
          id: 4,
          name: "Pedra Furada",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/logo.jpeg"),
        },
        {
          id: 5,
          name: "Kitesurf e Windsurf",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/logo.jpeg"),
        },
        {
          id: 6,
          name: "Yoga, Massagens e Tarot",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/logo.jpeg"),
        },
        // Agrega más tours según sea necesario
      ],
    };
  },
  methods: {
    bookTour(id) {
      // Lógica para reservar el tour
      alert(`Reservar tour con ID: ${id}`);
    },
  },
};
</script>

<style scoped>
.tours-activities {
  text-align: center;
  padding: 2rem;
  width: 90vw;
  max-width: 1200px;
  margin: auto;
}

.tours {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* Estilos específicos para dispositivos móviles */
@media (max-width: 768px) {
  .tours {
    flex-direction: column;
    align-items: center;
  }
}
</style>

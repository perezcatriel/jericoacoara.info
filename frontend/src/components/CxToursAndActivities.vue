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
        :onClick="() => bookTour(tour.markdownPath)"
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
          image: require("@/assets/photos/malhada-beach.webp"),
          markdownPath: "blog/playa-jericoacoara"
        },
        {
          id: 2,
          name: "Duna del Pôr do Sol",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/photos/dunapordosol.jpg"),
          markdownPath: "blog/duna-por-do-sol"
        },
        {
          id: 3,
          name: "Lagoa do Paraíso",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/photos/lagoa-do-paraiso.webp"),
          markdownPath: "blog/lagoa-do-paraiso"
        },
        {
          id: 4,
          name: "Pedra Furada",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/photos/pedra-furada.webp"),
          markdownPath: "blog/pedra-furada"
        },
        {
          id: 5,
          name: "Kitesurf e Windsurf",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/photos/Jeri-Kitesurfing.webp"),
          markdownPath: "blog/kitesurf-windsurf"
        },
        {
          id: 6,
          name: "Yoga, Masajes y Tarot",
          description: "Un hermoso atardecer.",
          price: "$80",
          image: require("@/assets/photos/tarot-jeri.webp"),
          markdownPath: "blog/yoga-masajes-tarot"
        },
        // Agrega más tours según sea necesario
      ],
    };
  },
  methods: {
    bookTour(markdownPath) {
      const url = `${window.location.origin}/${markdownPath}`;
      window.location.href = url
    },
  },
};
</script>

<style scoped>
.tours-activities {
  text-align: center;
  padding: 2rem;
  width: 100%;
  max-width: 1200px; /* Limita el ancho máximo para pantallas grandes */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
}

.tours {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centra las tarjetas horizontalmente */
  gap: 1rem; /* Espacio uniforme entre las tarjetas */
}
</style>

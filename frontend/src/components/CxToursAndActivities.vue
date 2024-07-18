<template>
  <div class="tours-activities">
    <h2>Tours y Actividades</h2>
    <div class="tours">
      <div class="tour" v-for="tour in tours" :key="tour.id">
        <img :src="tour.image" :alt="tour.name" />
        <h3>{{ tour.name }}</h3>
        <p>{{ tour.description }}</p>
        <p>Precio: {{ tour.price }}</p>
        <button @click="bookTour(tour.id)">Reservar Ahora</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  width: 80vw;
  margin: auto;
}
.tours {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tour {
  margin: 1rem;
  width: 300px;
}
.tour img {
  width: 100%;
  height: auto;
}
.tour button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>

<template>
  <div class="highlights">
    <h2>Principales Atracciones</h2>
    <div class="attractions">
      <div
        class="attraction"
        v-for="attraction in attractions"
        :key="attraction.id"
      >
        <img :src="attraction.image" :alt="attraction.name" />
        <div class="caption">
          <h3>{{ attraction.name }}</h3>
          <p>{{ attraction.description }}</p>
          <button @click="viewMore(attraction.id)">Ver Más</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attractions: [
        {
          id: 1,
          name: "Restaurantes e Cafés",
          description: "Un tour espectacular.",
          image: require("@/assets/logo.jpeg"),
        },
        {
          id: 2,
          name: "Vida Nocturna",
          description: "Aventuras en las dunas.",
          image: require("@/assets/logo.jpeg"),
        },
        {
          id: 2,
          name: "Compras e artesanato",
          description: "Aventuras en las dunas.",
          image: require("@/assets/logo.jpeg"),
        },
        // Agrega más atracciones según sea necesario
      ],
    };
  },
  methods: {
    viewMore(id) {
      // Lógica para ver más información sobre la atracción
      console.log(`Ver más información sobre la atracción con id ${id}`);
    },
  },
};
</script>

<style scoped>
.highlights {
  text-align: center;
  padding: 2rem;
}
.attractions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.attraction {
  margin: 1rem;
  width: 300px;
  position: relative;
}
.attraction img {
  width: 100%;
  height: auto;
}
.caption {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 1rem;
  text-align: center;
  box-sizing: border-box; /* Asegura que el padding se incluya en el ancho total */
}

.caption h3,
.caption p {
  display: flex;
  justify-content: center;
  margin: 0;
}
.caption h3 {
  margin-top: 180px;
}
.caption button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ff6347;
  border: none;
  color: white;
  cursor: pointer;
}
</style>

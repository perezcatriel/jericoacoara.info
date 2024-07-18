<template>
  <div class="highlights">
    <h2>Principales Atracciones</h2>
    <div class="attractions">
      <div
        class="attraction"
        v-for="attraction in attractions"
        :key="attraction.id"
      >
        <div class="image-container">
          <img :src="attraction.image" :alt="attraction.name" />
        </div>
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
          image: require("@/assets/photos/freddyssimo.jpeg"),
        },
        {
          id: 2,
          name: "Vida Nocturna",
          description: "Aventuras en las dunas.",
          image: require("@/assets/photos/cafejeri.jpeg"),
        },
        {
          id: 3,
          name: "Compras e artesanato",
          description: "Aventuras en las dunas.",
          image: require("@/assets/photos/feira.jpg"),
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
  width: 80vw;
  margin: auto;
}

.attractions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.attraction {
  margin: 1rem;
  width: 100%;
  max-width: 300px;
  position: relative;
  flex: 1 1 300px; /* Permite que los elementos se redimensionen proporcionalmente */
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

.caption {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 1rem;
  text-align: center;
  box-sizing: border-box; /* Asegura que el padding se incluya en el ancho total */
}

.caption h3,
.caption p {
  margin: 0;
}

.caption button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ff6347;
  border: none;
  color: white;
  cursor: pointer;
}

/* Estilos específicos para dispositivos móviles */
@media (max-width: 768px) {
  .attractions {
    flex-direction: column;
    align-items: center;
  }

  .attraction {
    width: 90%; /* Ajusta el ancho para móviles */
    max-width: none; /* Permite que el ancho se ajuste */
  }
}
</style>

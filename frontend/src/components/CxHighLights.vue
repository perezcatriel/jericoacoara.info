<template>
  <div class="highlights">
    <h2>Principales Atracciones</h2>
    <div class="attractions">
      <CxCard
        v-for="attraction in attractions"
        :key="attraction.id"
        :name="attraction.name"
        :description="attraction.description"
        :image="attraction.image"
        :onClick="() => viewMore(attraction.id)"
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
          id: "post3",
          name: "Compras e Artesanato",
          description: "Explora la feria y tiendas locales.",
          image: require("@/assets/photos/feira.jpg"),
        },
        // Agrega más atracciones según sea necesario
      ],
    };
  },
  methods: {
    viewMore(id) {
      this.$router.push(`/blog/${id}`);
    },
  },
};
</script>

<style scoped>
.highlights {
  text-align: center;
  padding: 2rem;
  width: 100%;
  max-width: 1200px; /* Opcional: Limita el ancho máximo */
  margin: 0 auto;
}

.attractions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centra las tarjetas horizontalmente */
  gap: 1rem; /* Espacio uniforme entre tarjetas */
}
</style>

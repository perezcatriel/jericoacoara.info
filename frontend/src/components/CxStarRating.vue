<template>
  <div class="star-rating">
    <span
      v-for="star in 5"
      :key="star"
      class="star"
      :class="{ filled: star <= rating }"
    >&#9733;</span>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.star-rating {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}
.star {
  font-size: 1.5rem;
  color: #ccc;
}
.star.filled {
  color: #ffc107;
}
</style>

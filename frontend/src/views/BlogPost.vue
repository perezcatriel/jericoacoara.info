<template>
  <div class="blog-post">
    <main>
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  components: {
    
  },
  data() {
    return {
      post: {
        id: 1,
        title: 'Título de la Publicación',
        content: 'Contenido completo de la publicación...'
      }
    };
  },
};
</script>

<style scoped>
.main {
  padding: 20px;
}
</style>

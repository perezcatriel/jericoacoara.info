<template>
  <div class="blog-post">
    <CxHeader />
    <main>
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </main>
    <CxFooter />
  </div>
</template>

<script>
import CxHeader from '@/components/CxHeader.vue';
import CxFooter from '@/components/CxFooter.vue';

export default {
  name: 'BlogPost',
  components: {
    CxHeader,
    CxFooter,
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

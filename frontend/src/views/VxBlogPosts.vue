<template>
  <div class="blog-posts">
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'Restaurantes y Cafés en Jericoacoara' },
        { id: 2, title: 'Vida Nocturna en Jericoacoara' },
        { id: "post3", title: 'Compras y Artesanias en Jericoacora' },
      ]
    }
  }
}
</script>

<style scoped>
.blog-posts {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}
</style>

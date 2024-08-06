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
        { id: "playa-jericoacoara", title: 'Playa de Jericoacoara' },
        { id: "duna-por-do-sol", title: 'Duna pôr do sol de Jericoacoara' },
        { id: "lagoa-do-paraiso", title: 'Lagoa Paraiso de Jericoacora' },
        { id: "pedra-furada", title: 'Pedra Furada' },
        { id: "kitesurf-windsurf", title: 'Kitesurf y Windsurf en Jericoa' },
        { id: "yoga-masajes-tarot", title: 'Yoga, masajes y tarôt en Jericoacora' },



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

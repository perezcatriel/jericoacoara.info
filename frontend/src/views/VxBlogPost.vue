<template>
  <div class="blog-post">
    <div v-html="postContent"></div>
    <div class="button-container">
      <button @click="goBack">Regresar al menú</button>
      <button class="cta-button" @click="ctaAction">Ver más</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import markdownIt from "markdown-it";

export default {
  data() {
    return {
      postContent: "",
    };
  },
  created() {
    this.loadPost();
  },
  methods: {
    async loadPost() {
      const md = new markdownIt();
      const postId = this.$route.params.id;
      try {
        const response = await axios.get(
          `${process.env.BASE_URL}posts/${postId}.md`
        );
        this.postContent = md.render(response.data);
      } catch (error) {
        console.error("Error loading post:", error);
        this.postContent = "Error loading post content.";
      }
    },
    goBack() {
      this.$router.push("/blog");
    },
    ctaAction() {
      // Redirecciona a home/#rentals
      this.$router.push({ path: "/", hash: "#rentals" });
      setTimeout(() => {
          const element = document.getElementById("rentals");
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
    }
  },
};
</script>

<style scoped>
.blog-post {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.blog-post h1,
.blog-post h2,
.blog-post h3,
.blog-post h4,
.blog-post h5,
.blog-post h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.blog-post p {
  margin: 0.5rem 0;
}

.blog-post ul,
.blog-post ol {
  padding-left: 2rem;
}

.blog-post li {
  margin-bottom: 0.5rem;
}

.blog-post a {
  color: #007bff;
  text-decoration: none;
}

.blog-post a:hover {
  text-decoration: underline;
}

.blog-post blockquote {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #555;
  font-style: italic;
}

.blog-post code {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 0.2rem 0.4rem;
  font-size: 0.9rem;
}

.blog-post pre {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 1rem;
  overflow-x: auto;
}

.blog-post img {
  max-width: 100%;
  height: auto;
}

.button-container {
  margin-top: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  font-size: 1rem;
}

button:hover {
  background-color: #0056b3;
}

.cta-button {
  background-color: #28a745;
}

.cta-button:hover {
  background-color: #218838;
}

/* Mobile-first styles */
@media (max-width: 768px) {
  .button-container {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 100%;
    margin: 5px 0;
  }
}
</style>

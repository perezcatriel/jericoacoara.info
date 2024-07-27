import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import BlogPost from "../views/BlogPost.vue";
import JericoacoaraPage from '../views/JericoacoaraPage.vue';

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog-post", name: "BlogPost", component: BlogPost },
  { path: "/jericoacoara", name: "JericoacoaraPage", component: JericoacoaraPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

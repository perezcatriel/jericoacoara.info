import { createRouter, createWebHistory } from "vue-router";
import VxHome from "../views/VxHome.vue";
import VxBlogPosts from "../views/VxBlogPosts.vue";
import VxBlogPost from "../views/VxBlogPost.vue";

const routes = [
  { path: "/", name: "Home", component: VxHome },
  { path: "/blog", name: "BlogPosts", component: VxBlogPosts },
  { path: "/blog/:id", name: "BlogPost", component: VxBlogPost },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

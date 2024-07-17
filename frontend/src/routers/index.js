import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import BlogPost from '../views/BlogPost.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog-post',
    name: 'BlogPost',
    component: BlogPost
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

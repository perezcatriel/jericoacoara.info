import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/index"; // Importa el router

// Crea la aplicación Vue
const app = createApp(App);

// Usa el router
app.use(router);

// Monta la aplicación en el elemento con id 'app'
app.mount("#app");

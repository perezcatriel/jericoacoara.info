<template>
  <footer class="footer">
    <div class="container">
      <form class="newsletter-form" @submit.prevent="submitForm">
        <h2>Subscribete a nuestro Newsletter</h2>
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="name" placeholder="Introduce tu nombre" required />
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="email" placeholder="Introduce tu correo electrónico" required />
        <button type="submit">Suscribirse</button>
        <p v-if="message" class="message">{{ message }}</p>
      </form>
      <p>&copy; 2024 Jericoacoara. Todos los derechos reservados.</p>
      <p>By <strong><a href="https://datacraft.vercel.app" target="_blank">DataCraft</a></strong></p>
      <nav>
        <ul>
          <li><a href="#">&#x2191;</a></li> <!-- Flecha hacia arriba en Unicode -->
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://your-api-endpoint.com/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: this.name, email: this.email })
        });
        
        if (response.ok) {
          this.message = 'Gracias por suscribirte!';
        } else {
          this.message = 'Hubo un error. Por favor, intenta nuevamente.';
        }
      } catch (error) {
        console.error('Error:', error);
        this.message = 'Hubo un error. Por favor, intenta nuevamente.';
      }

      // Restablecer los campos de nombre y correo electrónico
      this.name = '';
      this.email = '';
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 2rem 0;
  text-align: center;
  position: relative;
  width: 100vw;
}
.footer .container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.newsletter-form {
  margin-bottom: 1.5rem;
  text-align: center;
}
.newsletter-form label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  display: block;
  color: #fff;
}
.newsletter-form input {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}
.newsletter-form button {
  padding: 0.5rem 1rem;
  background-color: #ff6347;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}
.newsletter-form button:hover {
  background-color: #e5533d;
}
.message {
  margin-top: 0.5rem;
  color: #4caf50;
  font-size: 1rem;
}
.container p {
  margin: 0 auto;
}
.footer nav ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}
.footer nav ul li {
  margin-top: 1rem;
}
.footer nav ul li a {
  color: white;
  font-size: 1rem;
  text-decoration: none;
  background-color: #050505aa;
  padding: 1rem;
  border-radius: 10%;
  position: fixed;
  right: 30px;
  bottom: 20px;
}
</style>

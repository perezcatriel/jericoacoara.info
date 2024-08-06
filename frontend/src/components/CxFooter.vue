<template>
  <footer class="footer" id="footer">
    <div class="container">
      <form class="newsletter-form" @submit.prevent="submitForm">
        <h2>Suscríbete a nuestro Newsletter</h2>
        <div class="form-group">
          <label for="name"></label>
          <input type="text" id="name" v-model="name" placeholder="Introduce tu nombre" required />
        </div>
        <div class="form-group">
          <label for="email"></label>
          <input type="email" id="email" v-model="email" placeholder="Introduce tu correo electrónico" required />
        </div>
        <button type="submit">Suscribirse</button>
        <p v-if="message" class="message">{{ message }}</p>
      </form>
      <p>&copy; 2024 Jericoacoara. Todos los derechos reservados.</p>
      <p>By <strong><a href="https://datacraft.vercel.app" target="_blank" class="link">DataCraft</a></strong></p>
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
          this.message = '¡Gracias por suscribirte!';
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
  padding: 2rem 1rem;
  text-align: center;
  position: relative;
  width: 100vw;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto; /* Centra el contenedor */
  padding: 0 1rem; /* Añade un poco de espacio en los laterales */
}

.newsletter-form {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el formulario horizontalmente */
}

.newsletter-form h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #fff;
}

.form-group {
  margin-bottom: 1rem;
  text-align: center; /* Centra las etiquetas y campos */
}

.form-group label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  display: block;
  color: #fff;
}

.form-group input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
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

.newsletter-form input:focus, .newsletter-form button:focus {
  outline: none;
  border-color: #007bff;
}

.link {
  text-decoration: none;
  color: #007bff;
}

.message {
  margin-top: 0.5rem;
  color: #4caf50;
  font-size: 1rem;
}

.footer p {
  margin: 0.5rem auto;
}

.footer nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: fixed;
  right: 20px; /* Posicionar en el lateral derecho */
  bottom: 20px; /* Espacio desde el fondo */
}

.footer nav ul li {
  margin-top: 1rem;
}

.footer nav ul li a {
  color: white;
  font-size: 2rem; /* Aumentar tamaño de la flecha */
  text-decoration: none;
  background-color: #050505aa;
  padding: 1rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.footer nav ul li a:hover {
  background-color: #333;
}

/* Estilos específicos para dispositivos móviles */
@media (max-width: 768px) {
  .newsletter-form input, .newsletter-form button {
    width: 90%;
    max-width: none;
  }

  .footer {
    padding: 2rem 0.5rem;
  }

  .footer nav ul li a {
    padding: 0.75rem;
    font-size: 1.5rem;
  }
}
</style>

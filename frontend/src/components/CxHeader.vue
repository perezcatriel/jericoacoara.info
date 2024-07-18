<template>
  <header class="header">
    <img src="@/assets/logo.jpeg" alt="Jericoacoara" class="logo" />
    <h1>Jeri Info</h1>
    <div class="menu-icon" @click="toggleMenu">
      <span class="menu-icon__bars">&#9776;</span> <!-- Icono de menú con Unicode -->
    </div>
    <nav>
      <ul :class="{ 'show-menu': isMenuOpen }">
        <li><a href="/" @click="closeMenu">Inicio</a></li>
        <li><a href="/#highlights" @click="closeMenu">Qué Hacer</a></li>
        <li><a href="/#tours" @click="closeMenu">Tours</a></li>
        <li><a href="/#contact" @click="closeMenu">Contacto</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu
    };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
}

.logo {
  width: 60px;
  border-radius: 50%;
}

.menu-icon {
  display: none;
  cursor: pointer;
}

.menu-icon__bars {
  font-size: 24px;
}

nav ul {
  display: none;
  list-style: none;
  padding: 0;
}

nav ul.show-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 12%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
}

nav ul.show-menu li {
  margin: 1rem 0;
}

nav ul.show-menu li a {
  text-decoration: none;
  color: #000;
}

@media screen and (max-width: 768px) {
  h1 {
    text-align: center;
  }

  .menu-icon {
    display: block;
  }

  nav ul {
    position: relative;
  }
}

@media screen and (min-width: 768px) {
  .menu-icon {
    display: none;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    position: static;
  }

  nav ul li {
    margin: 0;
  }

  nav ul li a {
    text-decoration: none;
    color: #000;
  }
}
</style>

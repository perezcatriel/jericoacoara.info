<template>
  <header class="header">
    <img src="@/assets/logo.jpeg" alt="Jericoacoara" class="logo" />
    <h1>Jeri Info</h1>
    <div
      class="menu-icon"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen.toString()"
      aria-controls="menu"
    >
      <span class="menu-icon__bars">&#9776;</span>
    </div>

    <nav>
      <ul :class="{ 'show-menu': isMenuOpen }">
        <li><a href="/" @click="closeMenu">Inicio</a></li>
        <li><a href="/blog/" @click="closeMenu">Blog</a></li>
        <li><a href="/#rentals" @click="closeMenu">Alojamientos</a></li>
        <li><a href="/#footer" @click="closeMenu">Contacto</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";

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
      closeMenu,
    };
  },
};
</script>

<style scoped>
/* Mobile-first styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1rem;
  background-color: #fff;
}

.logo {
  width: 60px;
  border-radius: 50%;
}

.menu-icon {
  display: block;
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

/* Styles for larger screens */
@media screen and (min-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
  }

  .menu-icon {
    display: none;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    position: static;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
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

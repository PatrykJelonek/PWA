<template>
  <header>
    <nav class="navbar">
      <h1 class="logo">Patryk Jelonek</h1>
      <ul class="navigation">
        <li class="navigation__item">
          <NuxtLink to="/" class="navigation__link">Home</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="onas" class="navigation__link">About</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/cars" class="navigation__link">Cars</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/pokemons" class="navigation__link">Pokemons</NuxtLink>
        </li>
        <li class="navigation__item">
          <a @click="clickMe()">Click Me</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    clickMe: () => {
      confirm('Hello World');
    }
  }
}
</script>

<style scoped>
.navbar {
  box-sizing: border-box;
  width: 100vw;
  background: #222831;
  color: #eeeeee;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 30px;

  text-align: center;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.logo {
  margin: 0;
}

.navigation {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  padding: 0;
}

.navigation__item {
  padding: 0 25px;
  transition: color 0.5s;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation__link {
  text-decoration: none;
  color: white;
  transition: color 0.5s;
}

.navigation__link:hover {
  text-decoration: none;
  color: #0092ca;
  transition: color 0.5s;
}

.navigation__item:hover {
  color: #0092ca;
  cursor: pointer;
  transition: color 0.5s;
}

@media (max-width: 500px) {
  .logo {
    padding: 25px;
  }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }

  .navigation {
    width: 100%;
  }

  .navigation__item {
    padding: 25px;
    width: 100%;
  }

  .navigation__item {
    transition: background-color 0.5s;
  }

  .navigation__item:hover {
    text-decoration: none;
    color: white;
    background: #0092ca;
    transition: background-color 0.5s;
  }
}
</style>

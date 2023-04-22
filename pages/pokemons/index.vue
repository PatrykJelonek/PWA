<template>
  <div class="container">
    <template v-if="loading">
      <div class="loading">
        <span>loading...</span>
      </div>
    </template>

    <template v-else>
      <div>
        <h3>Current Page: {{currentPage}}</h3>
      </div>
      <ul class="pokemons-list">
        <li class="pokemons-list__item" v-for="pokemon in pokemons">
          <NuxtLink :to="{path: '/pokemons/' + pokemon.name, params: {name: pokemon.name}}">{{ pokemon.name }}</NuxtLink>
        </li>
      </ul>
      <div class="pagination">
        <span class="pagination-link" v-if="previousLink" @click="fetchPokemons(previousLink, -1)">Previous</span>
        <span class="pagination-link" v-if="nextLink"  @click="fetchPokemons(nextLink, 1)">Next</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'custom',

  data() {
    return {
      currentPage: 1,
      pokemons: [],
      loading: true,
      defaultLink: `https://pokeapi.co/api/v2/pokemon`,
      nextLink: ``,
      previousLink: ``,
    }
  },

  methods: {
    async fetchPokemons(link, page) {
      await fetch(link)
        .then((response) => {
          response.json().then((response) => {
            this.pokemons = response.results;
            this.nextLink = response.next;
            this.previousLink = response.previous;
            this.loading = false;
            this.currentPage += page;
          });
        })
        .catch(error => console.log(error));
    }
  },

  mounted() {
    this.fetchPokemons(this.defaultLink, 0);
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}

.loading {
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.pokemons-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.pokemons-list__item {
  font-size: 18px;
  padding: 5px 0;
  text-transform: capitalize;
}

.pokemons-list__item {
  font-size: 18px;
  text-transform: capitalize;

  a {
    text-decoration: none;
    color: black;
    padding: 5px 5px;

    &:hover {
      background: rgba(255,0,0,.3);
      color: black;
      border-radius: 5px;
    }
  }
}

.pagination {
  margin-top: 50px;
}

.pagination-link {
  background: rgba(0,0,0,.8);
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
}

.pagination-link:hover {
  cursor: pointer;
}
</style>

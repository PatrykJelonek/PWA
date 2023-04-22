<template>
  <div>
    <template v-if="loading">
      <div class="loading">
        <span>loading...</span>
      </div>
    </template>

    <template v-else>
      <div v-if="pokemon">
        <div class="center">
          <h1 class="name">{{ pokemon.name }}</h1>

          <div class="imgs">
            <img :src="pokemon.sprites.front_default" alt="front-shiny">
            <img :src="pokemon.sprites.front_shiny" alt="front-shiny">
          </div>
        </div>

        <div class="statistics center">
          <h2>Statistics:</h2>
          <ul class="stats">
            <li v-for="stat in pokemon.stats">
              <span class="capitalize">{{ stat.stat.name }}: <strong>{{ stat.base_stat }}</strong></span>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <h2>Nie udało się pobrać!</h2>
      </div>
    </template>
  </div>
</template>

<script>
import Gallery from "../../../components/Gallery.vue";
import BigImage from "../../../components/BigImage.vue";
export default {
  name: "index",
  components: {BigImage, Gallery},
  layout: 'custom',

  data() {
    return {
      loading: true,
      pokemon: null,
      defaultLink: `https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}`,
    }
  },

  methods: {
    async fetchPokemon(link) {
      await fetch(link)
        .then((response) => {
          response.json().then((response) => {
            this.pokemon = response;
            this.loading = false;
          });
        })
        .catch(error => console.log(error));
    }
  },

  mounted() {
    this.fetchPokemon(this.defaultLink);
  }
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.name {
  text-transform: capitalize;
}

.capitalize {
  text-transform: capitalize;
}

.stats {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.center {
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

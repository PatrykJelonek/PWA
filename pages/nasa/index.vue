<template>
  <div class="container">
    <div class="search">
      <input class="search-input" type="search" v-model="searchQuery" @input="fetchNasaData(searchQuery)">
    </div>
    <div class="images" v-if="images.length > 0">
      <img
        v-for="image in images"
        v-if="image && image.links"
        class="image"
        :src="image.links[0].href"
        :alt="image.links[0].rel"
        @click="store.setBigImageSrc(image.links[0].href)"
      >
    </div>
    <div class="notfound" v-else>
      <h2>Not found...</h2>
    </div>
  </div>
</template>

<script>
import BigImage from "../../components/BigImage.vue";
import {mapMutations} from "vuex";
import { useGallery } from '../../store/gallery_pinia.js';

export default {
  name: "index",
  components: {BigImage},
  layout: 'custom',

  data() {
    return {
      searchQuery: 'sun',
      images: [],
      store: useGallery(),
    }
  },

  methods: {
    ...mapMutations({
      setCurrentImage: 'gallery/setCurrentImage'
    }),

    async fetchNasaData(query) {
      await fetch(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => response.json())
        .then((json) => this.images = json.collection.items)
        .catch((e) => {
          this.images = [];
          console.log(e)
        });
    }
  },

  mounted() {
    this.fetchNasaData(this.searchQuery);
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100px;
  height: 100px;
  border: 2px solid royalblue;
  margin: 5px;

  &:hover {
    border: 2px solid red;
    cursor: pointer;
  }
}

.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 400px;
  height: 40px;
  margin-bottom: 10px;
}

.images {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.notfound {
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

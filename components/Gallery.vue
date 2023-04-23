<template>
  <div class="gallery">
    <div class="gallery__preview">
      <em class="fa-solid fa-chevron-left" @click="decreaseCurrentImageIndex"></em>
      <div class="gallery__image_container" @click="store.setBigImageSrc(images[currentIndex].src)">
        <div class="gallery__image_container_over">
          <em class="fa-solid fa-magnifying-glass-plus" @click="decreaseCurrentImageIndex"></em>
        </div>
        <img :src="images[currentIndex].src" alt="zdjecie">
      </div>
      <em class="fa-solid fa-chevron-right" @click="increaseCurrentImageIndex"></em>
    </div>
    <div class="gallery__miniatures">
      <template v-for="(image, index) in images">
        <img :src="image.src" :alt="image.alt" class="gallery__image" v-bind:class="currentIndex === index ? 'current' : ''" @click="currentIndex = index">
      </template>
    </div>
  </div>
</template>

<script>
import BigImage from "./BigImage.vue";
import {mapMutations} from 'vuex';
import { useGallery } from './../store/gallery_pinia.js';

export default {
  name: "Gallery",
  components: {BigImage},
  props: ['images'],

  data() {
    return {
      currentIndex: 0,
      store: useGallery(),
    }
  },

  computed: {
    currentImage() {
      return this.$store.state.gallery.currentImage
    },
  },

  methods: {
    ...mapMutations({
      setCurrentImage: 'gallery/setCurrentImage'
    }),
    increaseCurrentImageIndex: function () {
      const nextIndex = this.currentIndex + 1;

      if (nextIndex >= this.images.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    decreaseCurrentImageIndex: function () {
      const nextIndex = this.currentIndex - 1;

      if (nextIndex < 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
    }
  }
}
</script>

<style scoped>
.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.gallery__image {
  width: 100px;
  cursor: pointer;
  padding: 0 10px;
  filter: grayscale(100%);
  transition: filter .2s;
}

.gallery__image:hover {
  filter: grayscale(0%);
  transition: filter .2s;
}

.gallery__preview {
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.gallery__preview em {
  margin: 0 100px;
}

.gallery__miniatures {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  padding: 25px;
  border-radius: 5px;
  margin-bottom: 25px;
}

.gallery__image_container {
  overflow: hidden;
  position: relative;
  background: white;
  padding: 25px;
  border-radius: 5px;
  margin-bottom: 25px;
}

.gallery__image_container img {
  position: relative;
  z-index: 100;
  transition: all .2s ease-in-out
}

.gallery__image_container:hover img {
  transform: scale(1.5);
}

.gallery__image_container .gallery__image_container_over {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: rgba(0, 0, 0, .3);
  opacity: 0;
  transition: opacity .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.gallery__image_container:hover .gallery__image_container_over {
  opacity: 1;
}

.current {
  border: 2px solid rgba(0,0,0,.2);
  border-radius: 5px;
}
</style>

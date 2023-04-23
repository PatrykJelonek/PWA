<template>
  <div class="container" v-bind:class="store.canShow ? 'show' : 'hide'">
    <div class="image-container">
      <div class="close-button-container">
        <em class="fa-solid fa-xmark close-btn" @click="store.removeBigImageSrc"></em>
      </div>
      <img class="big-image" :src="store.getBigImageSrc" alt="bigimage" @click="store.removeBigImageSrc">
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import { useGallery } from '../store/gallery_pinia.js';

export default {
  name: "BigImage",
  data() {
    return {
      img: null,
      store: useGallery(),
    }
  },

  computed: {
    currentImage() {
      return this.$store.state.gallery.currentImage
    },

    canShow() {
      return this.$store.state.gallery.currentImage !== null;
    }
  },

  methods: {
    ...mapMutations({
      removeCurrentImage: 'gallery/removeCurrentImage'
    })
  }
}
</script>

<style scoped>
.hide {
  display: none;
}

.show {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  z-index: 9999;
}

.close-button-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 25px;
}

.image-container {
  background: white;
  padding: 250px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.big-image {
  max-height: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.close-btn {
  font-size: 30px;
}

.close-btn:hover {
  cursor: pointer;
}
</style>

<template>
  <div>
    <h1>Home</h1>
<!--    <BigImage img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"></BigImage>-->
    <Gallery :images="images"></Gallery>
    <BigImage />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import BigImage from "../components/BigImage.vue";
import Gallery from "../components/Gallery.vue";

export default {
  name: 'IndexPage',
  components: {Gallery, BigImage, Navigation},
  layout: 'custom',

  data() {
    return {
      images: [
        {
          src: 'https://u.cyfrowe.pl/600x0/3/9/01_R6MarkII_Front_BODY[1]_1360893833.jpg',
          alt: 'image'
        },
        {
          src: 'https://u.cyfrowe.pl/600x0/5/7/02_R6MarkII_FrontSlantLeft_BODY[1]_416052257.jpg',
          alt: 'image'
        },
        {
          src: 'https://u.cyfrowe.pl/600x0/9/0/04_R6MarkII_Bottom_BODY[1]_866807993.jpg',
          alt: 'image'
        },
        {
          src: 'https://u.cyfrowe.pl/600x0/d/6/07_R6MarkII_Back_BODY[1]_1448173759.jpg',
          alt: 'image'
        },
        {
          src: 'https://u.cyfrowe.pl/600x0/3/3/06_R6MarkII_Left_BODY[1]_1166874218.jpg',
          alt: 'image'
        },
        {
          src: 'https://u.cyfrowe.pl/600x0/b/8/05_R6MarkII_Right_BODY[1]_670764440.jpg',
          alt: 'image'
        },
        {
          src: 'https://u.cyfrowe.pl/600x0/c/d/08_R6MarkII_Back_BODYCardslot[1]_948931425.jpg',
          alt: 'image'
        },
      ],
    }
  }
}
</script>

<style>

</style>

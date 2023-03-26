<template>
  <div>
    <Navigation></Navigation>

    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "custom",
  layout: "custom",
  components: {Navigation}
}
</script>

<style scoped>

</style>

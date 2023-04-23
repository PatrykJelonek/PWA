<template>
  <div>
    <Navigation></Navigation>
    <CommonHero></CommonHero>
    <main class="main">
      <Nuxt />
      <BigImage />
      <CommonLiveChat />
    </main>
  </div>
</template>

<script>
export default {
  name: "custom",
  layout: "custom",
}
</script>

<style scoped>

</style>

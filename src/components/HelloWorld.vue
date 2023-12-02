<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="container">
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      ini menggunakan bostrap
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</div>
</template>

<style scoped>

</style>

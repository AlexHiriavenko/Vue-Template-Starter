<template>
  <v-container fluid class="views home">
    <h2 class="text-h3 text-white text-center py-12 page-title">
      {{ title }}
    </h2>
  </v-container>
</template>

<script setup>
const title = ref('Mane Page')

onMounted(async () => {
  console.log(`${title.value} mounted`)
})
</script>

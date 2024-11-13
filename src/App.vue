<template>
  <v-layout class="flex-md-column">
    <HeaderApp />
    <v-main class="d-flex flex-md-column justify-center">
      <LoaderSpinner
        :is-loading="!contentStore.content"
        :color="'white'"
        :size="70"
      />
      <RouterView v-if="contentStore.content" />
    </v-main>
  </v-layout>
</template>

<script setup>
import HeaderApp from '@/components/HeaderApp.vue'
import { useContentStore } from './stores/contentStore'

const contentStore = useContentStore()
contentStore.getContent()
</script>

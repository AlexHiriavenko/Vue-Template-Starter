<template>
  <header style="min-height: 65px">
    <nav class="d-flex justify-center py-4 gap-4" style="gap: 1rem">
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route.path"
        class="nav-link"
      >
        {{ route.meta.title }}
      </router-link>
    </nav>
  </header>
</template>

<script setup>
const router = useRouter()

const routes = computed(() =>
  router.getRoutes().filter((r) => r.meta && r.meta.title)
)
</script>

<style scoped>
.router-link-active {
  color: #3498db;
  font-weight: bold;
}

.router-link-exact-active {
  color: #2ecc71;
  border-bottom: 2px solid #2ecc71;
}
</style>

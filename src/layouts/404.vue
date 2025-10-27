<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main text="center teal-700 dark:gray-200">
    404 Not Found
    <RouterView />
    <button @click="router.back()">back</button>
  </main>
</template>

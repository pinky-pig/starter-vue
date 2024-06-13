<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main text="center teal-700 dark:gray-200">
    <RouterView />
    <button @click="router.back()">back</button>
  </main>
</template>

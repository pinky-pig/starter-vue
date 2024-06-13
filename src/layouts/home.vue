<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <main text="center gray-700 dark:gray-200">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <Toaster
    position="top-center"
    :expand="false"
    :rich-colors="false"
    :close-button="false"
  />
</template>

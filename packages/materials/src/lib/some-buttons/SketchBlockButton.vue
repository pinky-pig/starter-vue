<script setup lang="ts">
withDefaults(defineProps<{
  primaryColor?: string
  secondaryColor?: string
}>(), {
  primaryColor: '#000000',
  secondaryColor: '#FFFFFF',
})
</script>

<template>
  <button
    class="
      btn relative px-4 py-2 text-neutarl-700 text-sm
    bg-white
      bg-[var(--secondaryColor)] hover:bg-[var(--primaryColor)]
      border border-[var(--primaryColor)]
      text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]
      shadow-[4px_4px_0px_0px_var(--primaryColor)] hover:shadow-[inset_0_0_0_4px_var(--secondaryColor)]
      hover:before:block before:inset-0 before:hidden before:absolute
    "
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  --primaryColor: v-bind(primaryColor);
  --secondaryColor: v-bind(secondaryColor);
}
</style>

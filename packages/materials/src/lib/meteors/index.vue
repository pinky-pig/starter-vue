<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    number?: number
  }>(),
  {
    number: 20,
  },
)

const meteors = computed(() => {
  return Array(props.number || 20).fill(true)
})
</script>

<template>
  <div class="w-full h-full absolute top-0 left-0 overflow-hidden">
    <span
      v-for="(_, index) in meteors"
      :key="`meteor${index}`"
      class="meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
      :style="{
        top: 0,
        left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
        animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
        animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
      }"
    />
  </div>
</template>

<style scoped>
.meteor-effect {
  animation: meteor 5s linear infinite;
}

@keyframes meteor {
  0% {
    transform: rotate(215deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
}
</style>

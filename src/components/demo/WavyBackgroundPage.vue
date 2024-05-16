<script setup lang="ts">
import { WavyBackground } from '@arvin/materials'
</script>

<template>
  <WavyBackground class="w-full h-80 mx-auto rounded-2xl overflow-hidden">
    <p class="text-4xl text-white font-bold inter-var text-center">
      Waves Background
    </p>
    <p class="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      其实跟创建的 SVG Path 一样，不过是调用了 noise 生成。
    </p>
    <p class="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      然后进行了动画封装， requestAnimationFrame 调用。
    </p>
  </WavyBackground>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { WavyBackground } from "@arvin/materials";
</script>

<template>
  <WavyBackground class="mx-auto h-80 w-full overflow-hidden rounded-2xl">
    <p class="inter-var text-center text-4xl font-bold text-white">
      Waves Background
    </p>
    <p
      class="inter-var mt-4 text-center text-base font-normal text-white md:text-lg"
    >
      其实跟创建的 SVG Path 一样，不过是调用了 noise 生成。
    </p>
    <p
      class="inter-var mt-4 text-center text-base font-normal text-white md:text-lg"
    >
      然后进行了动画封装， requestAnimationFrame 调用。
    </p>
  </WavyBackground>
</template>

<style scoped></style>

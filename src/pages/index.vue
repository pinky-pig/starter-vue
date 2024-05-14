<script setup lang="ts" generic="T extends any, O extends any">
import { FlipCard, GenerateButton } from '@arvin/materials'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center text-center px-4 pt-10">
    <div class="py-8" />

    <BentoIcon class="w-12 h-12 inline-block mb-4" />

    <h1 class="text-4xl font-bold mb-2">
      Starte Vue
    </h1>

    <p>
      <em class="text-sm opacity-75">A simple template for Vue3.</em>
    </p>

    <div
      class="w-full max-w-[652px] mx-auto text-start"
      style="
        padding-left: max(16px, env(safe-area-inset-left));
        padding-right: max(16px, env(safe-area-inset-right));
      "
    >
      <Installation />
    </div>

    <div class="w-full max-w-[652px] mx-auto text-start px-[16px]">
      <FlipCard />
    </div>

    <div class="w-full max-w-[652px] mx-auto text-start px-[16px]">
      <br>
      <br>
      <h2>Some Buttons</h2>
      <div class="w-full flex flex-row flex-wrap gap-4">
        <GenerateButton />
      </div>
    </div>

    <TheFooter />

    <Sonner
      position="top-center"
      :expand="false"
      :rich-colors="false"
      :close-button="false"
    />
  </div>
</template>

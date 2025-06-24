<script setup lang="ts" generic="T extends any, O extends any">
import {
  BevelButton,
  GenerateButton,
  SketchBlockButton,
  SketchButton,
  WireCard,
} from "@arvin/materials";
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center px-4 pt-10 text-center"
  >
    <div class="py-8" />

    <AppIcon class="mb-4 inline-block h-12 w-12" />

    <h1 class="mb-2 text-4xl font-bold">Starter Vue</h1>

    <p>
      <em class="text-sm opacity-75">A simple template for Vue3.</em>
    </p>

    <div
      class="mx-auto w-full max-w-[652px] text-start"
      style="
        padding-left: max(16px, env(safe-area-inset-left));
        padding-right: max(16px, env(safe-area-inset-right));
      "
    >
      <Installation />
    </div>

    <div class="mx-auto w-full max-w-[652px] px-[16px] text-start">
      <!-- <FlipCard /> -->
    </div>

    <div class="mx-auto w-full max-w-[652px] px-[16px] text-start">
      <br />
      <br />
      <h2>Some Buttons</h2>
      <div class="flex w-full flex-row flex-wrap gap-4">
        <GenerateButton />
        <SketchButton> SketchButton </SketchButton>
        <BevelButton> BevelButton </BevelButton>
        <SketchBlockButton> SketchBlockButton </SketchBlockButton>
      </div>
    </div>

    <div class="mx-auto w-full max-w-[652px] px-[16px] text-start">
      <br />
      <br />
      <h2>Iconify</h2>
      <IconifyDemo />
    </div>

    <div class="mx-auto w-full max-w-[652px] px-[16px] text-start">
      <br />
      <br />
      <h2>Wavy Effect</h2>

      <WavyBackgroundPage />
    </div>

    <div class="mx-auto w-full max-w-[652px] px-[16px] text-start">
      <br />
      <br />
      <h2>Meteor Effect</h2>

      <MeteorCard />
    </div>

    <div class="mx-auto w-full max-w-[652px] px-[16px] text-start">
      <br />
      <br />
      <h2>Wire Card</h2>

      <WireCard>
        <div class="h-60 w-80 p-4">
          <h4 class="mt-4 font-bold tracking-wide text-black">WireCard</h4>
          <p class="mt-8 text-sm tracking-wide text-zinc-400">
            背景是引入一个 SVG ，圆角是使用了 css-houdini-squircle， 三层 DOM
            嵌套 Slot 内容。
          </p>
        </div>
      </WireCard>
    </div>

    <div class="mx-auto w-full max-w-[652px] px-[16px] text-start">
      <br />
      <br />
      <h2>Maps</h2>

      <MapsDemo />
    </div>

    <br />
    <br />
    <TheFooter />

    <Sonner
      position="top-center"
      :expand="false"
      :rich-colors="false"
      :close-button="false"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

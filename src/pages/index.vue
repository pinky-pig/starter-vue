<script setup lang="ts" generic="T extends any, O extends any">
import { BevelButton, GenerateButton, SketchBlockButton, SketchButton, WireCard } from '@arvin/materials'
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center text-center px-4 pt-10">
    <div class="py-8" />

    <AppIcon class="w-12 h-12 inline-block mb-4" />

    <h1 class="text-4xl font-bold mb-2">
      Starter Vue
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
      <!-- <FlipCard /> -->
    </div>

    <div class="w-full max-w-[652px] mx-auto text-start px-[16px]">
      <br>
      <br>
      <h2>Some Buttons</h2>
      <div class="w-full flex flex-row flex-wrap gap-4">
        <GenerateButton />
        <SketchButton>
          SketchButton
        </SketchButton>
        <BevelButton>
          BevelButton
        </BevelButton>
        <SketchBlockButton>
          SketchBlockButton
        </SketchBlockButton>
      </div>
    </div>

    <div class="w-full max-w-[652px] mx-auto text-start px-[16px]">
      <br>
      <br>
      <h2>Iconify</h2>
      <IconifyDemo />
    </div>

    <div class="w-full max-w-[652px] mx-auto text-start px-[16px]">
      <br>
      <br>
      <h2>Wavy Effect</h2>

      <WavyBackgroundPage />
    </div>

    <div class="w-full max-w-[652px] mx-auto text-start px-[16px]">
      <br>
      <br>
      <h2>Meteor Effect</h2>

      <MeteorCard />
    </div>

    <div class="w-full max-w-[652px] mx-auto text-start px-[16px]">
      <br>
      <br>
      <h2>Wire Card</h2>

      <WireCard>
        <div class="p-4 w-80 h-60 ">
          <h4 class="text-black font-bold tracking-wide mt-4">
            WireCard
          </h4><p class="mt-8 text-zinc-400 tracking-wide text-sm">
            背景是引入一个 SVG ，圆角是使用了 css-houdini-squircle， 三层 DOM 嵌套 Slot 内容。
          </p>
        </div>
      </WireCard>
    </div>

    <div class="w-full max-w-[652px] mx-auto text-start px-[16px]">
      <br>
      <br>
      <h2>Maps</h2>

      <MapsDemo />
    </div>

    <br>
    <br>
    <TheFooter />

    <Sonner
      position="top-center"
      :expand="false"
      :rich-colors="false"
      :close-button="false"
    />
  </div>
</template>

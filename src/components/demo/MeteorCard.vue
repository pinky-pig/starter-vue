<script setup lang="ts">
import { Meteors } from '@arvin/materials'
</script>

<template>
  <div class="">
    <div class="w-full relative max-w-xs">
      <div
        class="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl"
      />
      <div
        class="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start"
      >
        <div
          class="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 class="font-bold text-xl text-white mb-4 relative z-50">
          流星效果
        </h1>

        <p class="font-normal text-base text-slate-500 mb-4 relative z-50">
          开发思路是有多个 `span` 标签，然后用 `animation` 属性添加帧动画
          `rotate translateX`。
        </p>

        <p class="font-normal text-base text-slate-500 mb-4 relative z-50">
          流星的 DOM 实现： `span` 是圆，伪元素是尾巴。
        </p>
        <Meteors />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

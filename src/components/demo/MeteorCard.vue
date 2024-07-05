<script setup lang="ts">
import { Meteors } from "@arvin/materials";
</script>

<template>
  <div class="">
    <div class="relative w-full max-w-xs">
      <div
        class="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl"
      />
      <div
        class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl"
      >
        <div
          class="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500"
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

        <h1 class="relative z-50 mb-4 text-xl font-bold text-white">
          流星效果
        </h1>

        <p class="relative z-50 mb-4 text-base font-normal text-slate-500">
          开发思路是有多个 `span` 标签，然后用 `animation` 属性添加帧动画
          `rotate translateX`。
        </p>

        <p class="relative z-50 mb-4 text-base font-normal text-slate-500">
          流星的 DOM 实现： `span` 是圆，伪元素是尾巴。
        </p>
        <Meteors />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

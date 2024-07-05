<script setup lang="ts">
import { toast } from "vue-sonner";

const code = `pnpm install`;
const showCheckIcon = ref(false);

async function handleCopyCode() {
  await useCopyCode({ code, checkIconRef: showCheckIcon });
  toast("Copied to your clipboard!!!");
}
</script>

<template>
  <br />
  <br />
  <h2>Installation</h2>
  <div class="relative">
    <Suspense>
      <Code :code="code" lang="bash" />
    </Suspense>

    <button
      aria-label="Copy code"
      title="Copy code"
      class="btn-border absolute right-2 top-1 flex h-[26px] w-[26px] items-center justify-center rounded-[5px] border border-solid border-[#f3f3f3] p-1 dark:border-[#1e293b]"
      @click="handleCopyCode"
    >
      <div v-if="showCheckIcon" class="i-lucide-check text-[14px]" />
      <div v-else class="i-lucide-copy text-[14px]" />
    </button>
  </div>
</template>

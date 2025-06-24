<script setup lang="ts">
import { onMounted } from 'vue'

withDefaults(
  defineProps<{
    borderColor?: string
  }>(),
  {
    borderColor: '#1e293b',
  },
)

onMounted(() => {
  registerCSSHoudiniSquircle(document.documentElement)
})

function registerCSSHoudiniSquircle(root: HTMLElement) {
  const cssFrame = document.getElementById('squircle-css-script')
  if (cssFrame) {
    return null
  } else {
    const script = document.createElement('script')
    script.id = 'squircle-css-script'
    script.innerHTML = `
      if ("paintWorklet" in CSS) {
        CSS.paintWorklet.addModule(
          "https://www.unpkg.com/css-houdini-squircle/squircle.min.js"
        );
      }
    `
    root.appendChild(script)
  }
}
</script>

<template>
  <div class="wire-card w-fit h-fit z-1 relative rounded-[.5rem] box-border">
    <div class="wire-card-inner bg-[var(--border-color)] w-full h-full p-1">
      <div class="wire-card-content w-full h-full bg-gray-100">
        <slot />
      </div>
    </div>
    <div class="wire-card-bg" />
  </div>
</template>

<style scoped>
.wire-card-inner,
.wire-card-content {
  --border-color: v-bind(borderColor);
  -webkit-mask-image: paint(squircle);
  mask-image: paint(squircle);
  --squircle-radius: 16px;
}
.wire-card-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0.6em;
  left: 0.6em;
  z-index: -1;
  border-radius: 0.5rem;
  transition:
    top 0.25s,
    left 0.25s;
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><path d="m0 0 4 4Zm4 0L0 4Z" stroke-width=".5" stroke="%23000"/></svg>');
  -webkit-mask-image: paint(squircle);
  mask-image: paint(squircle);
  --squircle-radius: 16px;
}

.wire-card:hover .wire-card-bg {
  top: 0.35em;
  left: 0.35em;
}
</style>

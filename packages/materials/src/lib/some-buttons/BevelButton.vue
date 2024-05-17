<script setup lang="ts">
import { onMounted } from 'vue'

withDefaults(defineProps<{
  borderColor?: string
}>(), {
  borderColor: '#000000',
})

onMounted(() => {
  registerCSSHoudiniSquircle(document.documentElement)
})

function registerCSSHoudiniSquircle(root: HTMLElement) {
  const cssFrame = document.getElementById('squircle-css-script')
  if (cssFrame) {
    return null
  }
  else {
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
  <button class="bevel-btn h-full z-1 relative box-border ">
    <span class="edge" />

    <div class="bevel-btn-inner bg-[var(--border-color)] w-full h-full ">
      <div class="bevel-btn-content px-4 py-2 w-full h-full bg-gray-100">
        <slot />
      </div>
    </div>
  </button>
</template>

<style scoped>
.bevel-btn {
  --border-color: v-bind(borderColor);
  --padding: 4px;
  --radius-inner: 4px;
  --radius-content: 2px;
}

.bevel-btn-inner {
  padding: var(--padding);
  transform: translate(-4px, -4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  will-change: transform;

  clip-path: polygon(
    var(--radius-inner) 0%,
    calc(100% - var(--radius-inner)) 0%,
    100% var(--radius-inner),
    100% calc(100% - var(--radius-inner)),
    calc(100% - var(--radius-inner)) 100%,
    var(--radius-inner) 100%,
    0% calc(100% - var(--radius-inner)),
    0% var(--radius-inner)
  );
}

.bevel-btn-content {
  clip-path: polygon(
    var(--radius-content) 0%,
    calc(100% - var(--radius-content)) 0%,
    100% var(--radius-content),
    100% calc(100% - var(--radius-content)),
    calc(100% - var(--radius-content)) 100%,
    var(--radius-content) 100%,
    0% calc(100% - var(--radius-content)),
    0% var(--radius-content)
  );
}

.edge {
  position: absolute;
  inset: 0;
  background: #000;
  clip-path: polygon(
    var(--radius-inner) 0%,
    calc(100% - var(--radius-inner)) 0%,
    100% var(--radius-inner),
    100% calc(100% - var(--radius-inner)),
    calc(100% - var(--radius-inner)) 100%,
    var(--radius-inner) 100%,
    0% calc(100% - var(--radius-inner)),
    0% var(--radius-inner)
  );
}

.bevel-btn:hover .bevel-btn-inner {
  transform: translate(-5px, -5px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.bevel-btn:active .bevel-btn-inner {
  transform: translate(0px, 0px);
  transition: transform 34ms;
}
</style>

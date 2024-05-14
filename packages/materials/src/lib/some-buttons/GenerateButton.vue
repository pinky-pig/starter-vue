<script setup lang="ts">
withDefaults(defineProps<{
  loading?: boolean
}>(), {
  loading: false,
})
</script>

<template>
  <button
    class="pushable select-none text-white"
    :class="loading ? 'pointer-events-none text-white/80' : ''"
    :disabled="loading"
  >
    <span class="shadow" />
    <span class="edge" />
    <span class="front min-w-[max(30vw,200px)] text-center text-lg font-medium md:min-w-[120px] md:text-base">
      {{ loading ? 'Generating...' : 'Generate' }}
    </span>
  </button>
</template>

<style scoped>
.pushable {
  position: relative;
  padding: 0;
  background: transparent;
  border: none;
  outline-offset: 4px;
  cursor: pointer;
  transition: filter 250ms;
}

.shadow {
  background: #1e293b33;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  will-change: transform;
}

.edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    rgb(4 120 87) 0%,
    rgb(5 150 105) 8%,
    rgb(5 150 105) 92%,
    rgb(4 120 87) 100%
  );
  border-radius: 12px;
}

.front {
  background: #10b981;
  position: relative;
  display: block;
  padding: 10px 0;
  border-radius: 12px;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  will-change: transform;
}

.pushable:hover,
.pushable:focus-visible {
  filter: brightness(110%);
}

.pushable:hover .front,
.pushable:focus-visible .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:hover .shadow,
.pushable:focus-visible .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.pushable:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.pushable:focus:not(:focus-visible) {
  outline: none;
}
</style>

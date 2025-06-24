<script setup lang="ts">
export interface PolygonCardProps {
  borderColor?: string
  borderWidth?: number
  extent?: number
  offset?: number
  onlyArrow?: boolean
}
const props = withDefaults(defineProps<PolygonCardProps>(), {
  borderColor: '#000',
  onlyArrow: false,
  borderWidth: 4,
  extent: 75,
  offset: 1,
})

/**
 * 1------12
 * |4-----5 \
 * ||      \ \
 * ||       \ \
 * ||        6 11
 * ||       / /
 * ||      / /
 * |8-----7 /
 * 239-----10
 */

const containerClipPath = computed(() => {
  return props.onlyArrow
    ? `polygon(
        0% 0%, 
        0% 100%,
        0% 100%, 
        0% 0%, 
        ${props.extent}% 0%,
        calc(100% - ${props.borderWidth}px) 50%,
        ${props.extent}% 100%,
        0% 100%,
        0% 100%,
        calc(${props.extent}% + ${props.borderWidth + props.offset}px) 100%,
        100% 50%,
        calc(${props.extent}% + ${props.borderWidth + props.offset}px) 0%
      )`
    : `
    polygon(
      0% 0%, 
      0% 100%,
      calc(0% + ${props.borderWidth}px) 100%, 
      calc(0% + ${props.borderWidth}px) calc(0% + ${props.borderWidth}px),
      calc(${props.extent}% + ${props.borderWidth}px) calc(0% + ${props.borderWidth}px),
      calc(100% - ${props.borderWidth}px) 50%,
      calc(${props.extent}% + ${props.borderWidth}px) calc(100% - ${props.borderWidth}px),
      calc(0% + ${props.borderWidth}px) calc(100% - ${props.borderWidth}px),
      0% 100%,
      calc(${props.extent}% + ${props.borderWidth + props.offset}px) 100%,
      100% 50%,
      calc(${props.extent}% + ${props.borderWidth + props.offset}px) 0%
    )
  `
})

// 将内圈拷贝一下，用于里面的填充 4-5-6-7-8
const contentClipPath = computed(() => {
  return props.onlyArrow
    ? `polygon(
        0% 0%,
        calc(${props.extent - props.borderWidth}% + ${props.borderWidth}px) 0%,
        calc(100% - ${props.borderWidth}px) 50%,
        calc(${props.extent}%) 100%,
        0% 100%
      )`
    : `
    polygon(
      calc(0% + ${props.borderWidth}px) calc(0% + ${props.borderWidth}px),
      calc(${props.extent}% + ${props.borderWidth}px) calc(0% + ${props.borderWidth}px),
      calc(100% - ${props.borderWidth}px) 50%,
      calc(${props.extent}% + ${props.borderWidth}px) calc(100% - ${props.borderWidth}px),
      calc(0% + ${props.borderWidth}px) calc(100% - ${props.borderWidth}px)
    )
  `
})
</script>

<template>
  <div class="wrapper relative flex-shrink-0">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.content {
  clip-path: v-bind(contentClipPath);
}
.wrapper::before {
  width: 100%;
  height: 100%;
  content: ' ';
  position: absolute;
  right: 0;
  top: 0;
  clip-path: v-bind(containerClipPath);
  background: v-bind(borderColor);
}
</style>

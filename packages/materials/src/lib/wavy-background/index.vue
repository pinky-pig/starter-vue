<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { createNoise3D } from 'simplex-noise'

const props = withDefaults(defineProps<{
  blur?: number
  speed?: 'slow' | 'fast'
  colors?: string
  waveWidth?: number
  waveOpacity?: number
  backgroundFill?: string
}>(), {
  blur: 10,
  speed: 'fast',
  waveOpacity: 0.5,
})

const noise = createNoise3D()
let w: number,
  h: number,
  nt: number,
  i: number,
  x: number,
  ctx: any,
  canvas: any

const canvasRef = ref<HTMLCanvasElement | null>(null)
const wavyRef = ref<HTMLElement | null>(null)

const waveColors = props.colors ?? [
  '#38bdf8',
  '#818cf8',
  '#c084fc',
  '#e879f9',
  '#22d3ee',
]

function getSpeed() {
  switch (props.speed) {
    case 'slow':
      return 0.001
    case 'fast':
      return 0.002
    default:
      return 0.001
  }
}

function init() {
  canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  w = ctx.canvas.width = wavyRef.value!.clientWidth
  h = ctx.canvas.height = wavyRef.value!.clientHeight
  ctx.filter = `blur(${blur}px)`
  nt = 0

  wavyRef.value!.onresize = function () {
    w = ctx.canvas.width = wavyRef.value!.clientWidth
    h = ctx.canvas.height = wavyRef.value!.clientHeight
    ctx.filter = `blur(${blur}px)`
  }
  render()
}

function drawWave(n: number) {
  nt += getSpeed()
  for (i = 0; i < n; i++) {
    ctx.beginPath()
    ctx.lineWidth = props.waveWidth || 50
    ctx.strokeStyle = waveColors[i % waveColors.length]
    for (x = 0; x < w; x += 5) {
      const y = noise(x / 800, 0.3 * i, nt) * 100
      ctx.lineTo(x, y + h * 0.5) // adjust for height, currently at 50% of the container
    }
    ctx.stroke()
    ctx.closePath()
  }
}

let animationId: number
function render() {
  ctx.fillStyle = props.backgroundFill || 'black'
  ctx.globalAlpha = props.waveOpacity || 0.5
  ctx.fillRect(0, 0, w, h)
  drawWave(5)
  animationId = requestAnimationFrame(render)
}

onMounted(() => {
  init()
  return () => {
    cancelAnimationFrame(animationId)
  }
})
</script>

<template>
  <div
    ref="wavyRef"
    class="relative flex flex-col items-center justify-center"
  >
    <canvas
      id="canvas"
      ref="canvasRef"
      class="absolute inset-0 z-0"
      :style="{
        transform: `scale(${1 + (blur / 100)})`,
        filter: `blur(${blur}px)`,
      }"
    />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>

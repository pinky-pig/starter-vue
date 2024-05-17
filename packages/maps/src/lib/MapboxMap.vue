<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    options?: any
    token?: string
    style?: string
  }>(),
  {
    options: () => ({
      center: [118.888175, 32.048268],
      style: 'mapbox://styles/pinky-pig/clgc32u1e004g01n2bitvj86a',
      accessToken: 'pk.eyJ1IjoicGlua3ktcGlnIiwiYSI6ImNsZnJvZ2Q1cDAwZ3ozcG56bXFwbjAzZjAifQ.eEOFvRbKqZHQ3OxeqPBsXw',
    }),
  },
)

const emit = defineEmits(['onload'])

let map: mapboxgl.Map | null
const mapContainer = ref(null)

onMounted(() => {
  initMap(props.options)
})
onUnmounted(() => {
  map!.remove()
})
function initMap(option: any) {
  map = new mapboxgl.Map({
    container: mapContainer.value!,
    zoom: 4,
    ...option,
  })
  emit('onload', map)
}
</script>

<template>
  <div ref="mapContainer" style="width: 100%; height: 100%;" />
</template>

<style>
@import url('mapbox-gl/dist/mapbox-gl.css');

/* mapbox display */
a.mapboxgl-ctrl-logo {
  display: none !important;
}
.mapboxgl-ctrl-attrib.mapboxgl-compact {
  display: none !important;
}
.mapboxgl-ctrl-bottom-right {
  display: none !important;
}
</style>

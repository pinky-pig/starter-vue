<script setup lang="ts">
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    options?: any
  }>(),
  {
    options: () => ({
      view: new View({
        // 地图视图
        projection: 'EPSG:4326', // 坐标系，有EPSG:4326和EPSG:3857
        center: [114.064839, 22.548857], // 深圳坐标
        minZoom: 5, // 地图缩放最小级别
        zoom: 12, // 地图缩放级别（打开页面时默认级别）
      }),
    }),
  },
)

const emit = defineEmits(['onload'])

let map: Map | null
const mapContainer = ref(null)

onMounted(() => {
  initMap(props.options)
})
onUnmounted(() => {
  map!.dispose()
})
function initMap(option: any) {
  map = new Map({
    target: mapContainer.value,
    layers: [
      new Tile({
        source: new XYZ({
          url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
        }),
      }),
    ],
    ...option,
  })

  emit('onload', map)
}
</script>

<template>
  <div ref="mapContainer" style="width: 100%; height: 100%" />
</template>

<style scoped>
/* 样式需要加载一下，这里在 index.ts 中加载了 */
</style>

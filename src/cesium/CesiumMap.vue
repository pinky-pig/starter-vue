<script setup lang="ts">
import { onMounted } from 'vue'
import * as Cesium from 'cesium'

const props = withDefaults(
  defineProps<{
    mapKey?: string
    options?: any
  }>(),
  {
    mapKey: 'default',
    options: () => ({}),
  },
)

// https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS
const emit = defineEmits(['onload'])

const DEFAULT_OPTION: Cesium.Viewer.ConstructorOptions = {
  // 放大镜图标，查找位置工具，查找到之后会将镜头对准找到的地址，默认使用bing地图
  geocoder: false,
  // 房子图标，视角返回初始位置
  homeButton: false,
  // 经纬网图标，选择视角的模式，有三种：3D，2D，哥伦布视图（2.5D)
  sceneModePicker: false,
  // 地图图标，图层选择器，选择要显示的地图服务和地形服务,默认会用到cesium.ion
  baseLayerPicker: false,
  // 问号图标，导航帮助按钮，显示默认的地图控制帮助
  navigationHelpButton: false,
  animation: false, // 动画器件，显示当前时间，允许跳转特定时间
  timeline: false, // 时间轴
  // 全屏图标，全屏按钮
  fullscreenButton: false,
  // 虚拟现实
  // vrButton: true,
  // 阴影
  shadows: true,
  // 点击后显示详细信息
  // infoBox: true,
  // terrainExaggeration: 3.0, //地形夸大
  shouldAnimate: true,

  // skyBox: UniverseSkybox,
}

const mapContainer = ref<Element | null>(null)
let viewer: Cesium.Viewer | null

onMounted(() => {
  initCesiumViewer(props.options)
})

onUnmounted(() => {
  if (viewer) {
    viewer.destroy()
    viewer = null
  }
})

function initCesiumViewer(option: any) {
  if (mapContainer.value) {
    viewer = new Cesium.Viewer(
      mapContainer.value,
      { ...DEFAULT_OPTION, ...option },
    )

    emit('onload', viewer)
  }
}
</script>

<template>
  <div ref="mapContainer" class="h-full w-full" />
</template>

<style>
.cesium-viewer-bottom {
  display: none !important;
}
</style>

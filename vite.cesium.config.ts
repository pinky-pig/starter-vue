import cesium from 'vite-plugin-cesium'

export default {
  plugins: [
    cesium({
      rebuildCesium: true,
    }),
  ],
}

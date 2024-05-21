<template>
<div class="mapview"></div>
</template>

<script>
import { loadModules } from 'esri-loader'
const options = {
  url: 'https://js.arcgis.com/4.20/init.js',
  css: 'https://js.arcgis.com/4.20/esri/themes/light/main.css'
}
export default {
  name: 'my-mapview',
  mounted () {
    this.createMapView()
  },
  methods: {
    async createMapView () {
      const [Map, MapView] = await loadModules(['esri/Map', 'esri/views/MapView'], options)
      const map = new Map({
        basemap: 'osm'
      })
      const view = new MapView({
        container: 'mapview',
        map: map,
        zoom: 10,
        center: [104.072745, 30.663774]
      })
      view.ui.components = []
      console.log(view)
    }
  }
}
</script>

<style>
.mapview {

    width: 100px;
    height: 100px;
}
</style>

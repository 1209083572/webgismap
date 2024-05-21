<template>

<div id="mapView" class="mapView"></div>

</template>

<script>
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import '@arcgis/core/assets/esri/themes/light/main.css'
let map
let mapView
export default {
  name: 'my-mapview',
  data () {
    return {}
  },
  mounted () {
    this.initMap()
  },
  destroyed () {},
  methods: {
    initMap () {
      map = new Map({
        basemap: 'topo-vector'// 底图
      })
      mapView = new MapView({ // MapView为二维，SceneView为三维
        container: 'mapView',
        map: map,
        zoom: 12, // 缩放值
        center: [121.48941, 31] // 经度, 纬度
      })
      mapView.ui.move('zoom', 'bottom-right') // 添加缩放控件
    }
  }

}
</script>

<style>
.mapView {
width: 100%;
height: 100%;

}
</style>

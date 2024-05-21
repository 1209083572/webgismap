<template>
  <div class="onemap-page">
      <Mapview />
  </div>
</template>

<script>
import Mapview from '@/components/mapview/Mapview.vue'
export default {
  name: 'OneMap',
  components: {
    Mapview
  },
  methods: {}
}
</script>

<style>
.onemap-page {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

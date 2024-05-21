import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    _defaultMapView: '' // 默认地图view
  },
  getters: {

  },
  mutations: {
    _setDefaultMapView (state, value) {
      state._defaultMapView = value
    }
  },
  actions: {
  },
  modules: {
  }
})

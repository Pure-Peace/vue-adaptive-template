import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    pageWidth: 1024,
    themeConfig: {
      showSider: true,
      showBreadcrum: false,
      openSider: false,
      siderFixed: true,
      topNavbarFixed: true,
      siderWidth: 210
    }
  },
  getters: {
    themeShowSider: state => state.themeConfig.showSider,
    themeShowBreadcrum: state => state.themeConfig.showBreadcrum,
    themeOpenSider: state => state.themeConfig.openSider,
    themeSiderFixed: state => state.themeConfig.siderFixed,
    themeTopNavbarFixed: state => state.themeConfig.topNavbarFixed,
    themeSiderWidth: state => state.themeConfig.siderWidth,
    pageWidth: state => state.pageWidth,
    isMobile: state => state.isMobile
  },
  mutations: {
    setThemeShowSider (state, setting) {
      Vue.set(state.themeConfig, 'showSider', typeof (setting) === 'boolean' ? setting : !state.themeConfig.showSider)
    },
    setThemeShowBreadcrum (state, setting) {
      Vue.set(state.themeConfig, 'showBreadcrum', typeof (setting) === 'boolean' ? setting : !state.themeConfig.showBreadcrum)
    },
    setThemeOpenSider (state, setting) {
      Vue.set(state.themeConfig, 'openSider', typeof (setting) === 'boolean' ? setting : !state.themeConfig.openSider)
    },
    setThemeSiderFixed (state, setting) {
      Vue.set(state.themeConfig, 'siderFixed', typeof (setting) === 'boolean' ? setting : !state.themeConfig.siderFixed)
    },
    setThemeTopNavbarFixed (state, setting) {
      Vue.set(state.themeConfig, 'topNavbarFixed', typeof (setting) === 'boolean' ? setting : !state.themeConfig.topNavbarFixed)
    },
    setThemeSiderWidth (state, setting) {
      Vue.set(state.themeConfig, 'siderWidth', setting)
    },
    setPageWidth (state, setting) {
      Vue.set(state, 'pageWidth', setting)
    },
    setIsMobile (state, setting) {
      Vue.set(state, 'isMobile', setting)
    }
  },
  actions: {
  },
  modules: {
  }
})

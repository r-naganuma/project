import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'
import VueAnalytics from 'vue-analytics'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.use(VueHead, {
  separator: ' | '
})

Vue.use(VueAnalytics, {
  id: 'UA-134155339-1',
  router
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//axios
Vue.config.productionTip = false
import axios from './axios.js'
Vue.prototype.$http=axios

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 高德离线地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 高德key
  key: '4bc08120f58c8c651bfae5ab43894526', 
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer'],
  v: '1.4.15',
  uiVersion: '1.0.11'
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueSvgGauge from 'vue-svg-gauge'
import VueApexCharts from 'vue-apexcharts'
import 'zingchart/es6';
import zingchartVue from 'zingchart-vue';

Vue.component('zingchart', zingchartVue)
Vue.use(VueSvgGauge)
Vue.use(VueApexCharts)


Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

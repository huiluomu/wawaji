import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import moment from 'moment'

// 注册全局的过滤器
Vue.filter('date-string', function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

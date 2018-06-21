// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import {baseMusicPath} from "./common/utils";
import {dateFormat} from './common/utils.js'
import {newData} from './common/utils.js'
import {baseImgPath} from "./common/utils";
import store from './vuex/index'
Vue.prototype.$dateFormat = dateFormat
Vue.prototype.$newData = newData
Vue.prototype.$basePath = baseImgPath
Vue.prototype.$baseMusicFile = baseMusicPath
Vue.use(iView);
Vue.use(MuseUI)
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});
router.afterEach(route => {
  iView.LoadingBar.finish();
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

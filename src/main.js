import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'bootstrap/dist/css/bootstrap.css';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueQuillEditor from 'vue-quill-editor';

import VueFire from 'vuefire';
// import external stylesheets
import App from './App.vue';
import router from './js/router';

Vue.use(VueFire);  // activate vuefire plugin
Vue.use(VueQuillEditor);  // activate vue-quill-editor

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

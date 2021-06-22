import Vue, { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Element from './element';
// import VueLazyload from 'vue-lazyload';

const app: Vue.App = createApp(App);
// app.use(VueLazyload, {
//   preLoad: 1,
//   loading: require('@/assets/img/common/placeholder.png')
// });
// element全局配置
app.config.globalProperties.$ELEMENT = {
  size: 'small'
};

// createApp(App).use(store).mount('#app')
app
  .use(Element)
  .use(store)
  .use(router)
  .mount('#app');

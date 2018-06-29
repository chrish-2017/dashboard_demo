import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import App from './App';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import iview_i18n from 'utils/iview_i18n';
import axios from 'axios';
import * as filters from 'utils/filters';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.use(Router);
Vue.use(VueI18n);

Vue.prototype.$http = axios;

const router = new Router({
  //mode: 'history',
  routes: routes
});

Vue.config.lang = localStorage.lang || navigator.language || 'zh-CN';

axios.get('/api/lang', { params: { lang: Vue.config.lang } }).then(res => {
  const lang = res.data.lang;
  const messages = {};
  messages[Vue.config.lang] = Object.assign(lang, iview_i18n[Vue.config.lang]);

  const i18n = new VueI18n({
    locale: Vue.config.lang,
    messages
  });

  Vue.use(iView, {
    i18n(path, options) {
      let value = i18n.t(path, options);
      if (value !== null && value !== undefined) return value;
      return '';
    }
  });

  new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    i18n
  });
});

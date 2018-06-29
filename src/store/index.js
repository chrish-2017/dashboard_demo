/**
 * Created by ling.zou on 2018/4/16.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import tab from 'store/modules/tab';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tab
  }
});

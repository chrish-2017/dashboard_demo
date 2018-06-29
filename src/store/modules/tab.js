/**
 * Created by ling.zou on 2018/4/24.
 */

import { SET_ACTIVE_LINK, OPEN_TAB, CLOSE_TAB } from 'store/mutation-types';

const state = {
  openTab: [
    {
      link: '/#/editor',
      title: '系统设置',
      icon: 'gear-b'
    }
  ],
  activeLink: '/#/editor'
};

const getters = {
  getOpenTab: state => state.openTab,
  getActiveLink: state => state.activeLink
};

const mutations = {
  [OPEN_TAB](state, tab) {
    const { link, query } = tab;
    const openTab = state.openTab;
    let isNew = true;
    for (const item of openTab) {
      if (item.link === link) {
        isNew = false;
        if (query) {
          item.query = query;
        }
        break;
      }
    }
    if (isNew) {
      openTab.push(tab);
    }
    state.activeLink = link;
  },
  [CLOSE_TAB](state, link) {
    const index = state.openTab.findIndex(item => {
      return item.link === link;
    });
    if (state.activeLink === link) {
      state.activeLink = state.openTab[index - 1].link || state.openTab[index + 1].link || '';
    }
    state.openTab.splice(index, 1);
  },
  [SET_ACTIVE_LINK](state, activeLink) {
    state.activeLink = activeLink
  }
};

export default {
  state,
  getters,
  mutations
}

<template>
  <div class="app-container">
    <Head></Head>
    <Aside></Aside>
    <div class="main-container">
      <Tabs v-show="openTab.length" v-model="activeLink" type="card" closable :animated="false" @on-tab-remove="handleTabRemove">
        <TabPane v-for="item in openTab" :key="item.link" :label="item.title" :name="item.link">
          <iframe :src="item.link" width="100%" height="100%" frameborder="0"></iframe>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Head from 'components/Head';
  import Aside from 'components/Aside';

  export default {
    name: "Home",
    computed: {
      ...mapGetters({
        openTab: 'getOpenTab'
      }),
      activeLink: {
        get() {
          return this.$store.getters.getActiveLink;
        },
        set(val) {
          this.$store.commit('SET_ACTIVE_LINK', val);
        }
      }
    },
    methods: {
      handleTabRemove(name) {
        this.$store.commit('CLOSE_TAB', name);
      }
    },
    components: { Head, Aside }
  }
</script>

<style lang="less">
  .app-container {
    height: 100%;
    header {
      height: 60px;
      background-color: #fff;
      h1 {
        color: #666;
        margin-left: 20px;
      }
    }
    aside {
      width: 240px;
      background-color: #fff;
      position: absolute;
      top: 60px;
      bottom: 0;
      .ivu-menu {
        height: 100%;
      }
    }
    .main-container {
      background-color: #fff;
      position: absolute;
      top: 65px;
      bottom: 0;
      left: 245px;
      right: 5px;
      .ivu-tabs,
      .ivu-tabs-content,
      .ivu-tabs-tabpane {
        height: 100%;
      }
      .ivu-tabs-bar {
        margin-bottom: 0;
      }
    }
  }
</style>

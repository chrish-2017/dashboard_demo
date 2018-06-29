<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import iview_i18n from 'utils/iview_i18n';

  export default {
    name: "App",
    created() {
      window.onstorage = (event) => {
        if (event.key === 'lang') {
          this.$http.get('/api/lang', { params: { lang: localStorage.lang } }).then(res => {
            const lang = res.data.lang;
            const obj = Object.assign(lang, iview_i18n[localStorage.lang]);
            this.$i18n.setLocaleMessage(localStorage.lang, obj);
            this.$i18n.locale = localStorage.lang;
          });
        }
      }
    }
  }
</script>

<style scoped>

</style>

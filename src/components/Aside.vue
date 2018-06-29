<template>
  <aside>
    <Menu theme="light" :active-name="activeLink" @on-select="handleMenuSelect">
      <MenuItem v-for="item in menus" :key="item.link" :name="item.link">
        <Icon :type="item.icon"></Icon>
        {{item.title}}
      </MenuItem>
    </Menu>
  </aside>
</template>

<script>
  export default {
    name: "Aside",
    data() {
      return {
        menus: [
          {
            link: '/#/user',
            title: '用户管理',
            icon: 'person-stalker'
          },
          {
            link: '/#/editor',
            title: '系统设置',
            icon: 'gear-b'
          }
        ]
      }
    },
    computed: {
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
      handleMenuSelect(name) {
        const index = this.menus.findIndex(item => {
          return item.link === name;
        });
        const { link, title } = this.menus[index];
        this.$store.commit('OPEN_TAB', {
          link: link,
          title: title,
          query: ''
        });
      }
    }
  }
</script>

<style scoped>

</style>

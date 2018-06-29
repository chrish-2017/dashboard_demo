<template>
  <header class="clearfix">
    <Menu mode="horizontal" theme="light">
      <h1 class="left">后台管理系统</h1>
      <div class="right">
        <MenuItem name="1">
          <Icon type="person"></Icon>
          个人中心
        </MenuItem>
        <MenuItem name="2">
          <Icon type="power"></Icon>
          退出
        </MenuItem>
      </div>
    </Menu>
  </header>
</template>

<script>
  export default {
    name: "Head"
  }
</script>

<style scoped>

</style>

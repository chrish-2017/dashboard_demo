<template>
  <div class="wrapper">
    <div ref="editor">
      <p>初始化的内容</p>
    </div>
    <Button @click="getContent">查看内容</Button>
  </div>
</template>

<script>
  import E from 'wangeditor'

  export default {
    name: "Editor",
    data() {
      return {
        content: ''
      }
    },
    mounted() {
      const editor = new E(this.$refs.editor);
      editor.customConfig.onchange = (html) => {
        this.content = html;
      };
      editor.customConfig.uploadImgServer = '/api/upload';
      editor.customConfig.uploadImgHooks = {
        customInsert: function(insertImg, result, editor) {
          const data = result.data;
          for (const item of data) {
            insertImg('http://localhost:3000/album/' + item);
          }
        }
      };
      editor.customConfig.showLinkImg = false;
      editor.create();
    },
    methods: {
      getContent() {
        alert(this.content);
      }
    }
  }
</script>

<style scoped>

</style>

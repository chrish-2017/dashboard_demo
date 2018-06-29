<template>
  <div class="wrapper">
    <div class="btn-container">
      <Button type="primary" @click="handleAddClick">新增</Button>
    </div>
    <Table border :columns="columns" :data="data"></Table>
    <Modal v-model="modal"
           title="编辑"
           width="400px"
           ok-text="确定"
           cancel-text="取消"
           @on-ok="handleConfirmClick">
      <Form :model="formValidate" :rules="ruleValidate" :label-width="60">
        <FormItem label="用户名" prop="username">
          <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        columns: [
          {
            title: '用户名',
            key: 'username'
          },
          {
            title: '密码',
            key: 'password'
          },
          {
            title: '操作',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.handleEditClick(params.row);
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.handleDeleteClick(params.row);
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data: [],
        modal: false,
        modalAdd: true,
        formValidate: {
          username: '',
          password: ''
        },
        ruleValidate: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.$http.get('/api/user').then(res => {
          this.data = res.data.users;
        })
      },
      handleAddClick() {
        this.formValidate = {
          username: '',
          password: ''
        };
        this.modal = true;
        this.modalAdd = true;
      },
      handleEditClick(row) {
        this.formValidate = Object.assign({}, row);
        this.modal = true;
        this.modalAdd = false;
      },
      handleConfirmClick() {
        if (this.modalAdd) {
          this.$http.post('/api/user', this.formValidate).then(res => {
            if (res.data.status) {
              this.$Notice.success({
                title: '新增成功'
              });
              this.init();
            }
          });
        } else {
          this.$http.put('/api/user', this.formValidate).then(res => {
            if (res.data.status) {
              this.$Notice.success({
                title: '修改成功'
              });
              this.init();
            }
          });
        }
      },
      handleDeleteClick(row) {
        this.$http.delete('/api/user/' + row._id).then(res => {
          if (res.data.status) {
            this.$Notice.success({
              title: '删除成功'
            });
            this.init();
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .btn-container {
    padding: 10px;
  }
</style>

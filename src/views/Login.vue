<template>
  <div class="login-container">
    <h1>后台管理系统</h1>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="60">
      <FormItem label="用户名" prop="username">
        <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">登录</Button>
        <Button type="ghost" @click="handleReset('formValidate')">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
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
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http.post('/api/login', this.formValidate).then(res => {
              if (res.data.user) {
                this.$router.push({ path: '/home' });
              } else {
                this.$Message.error('用户名或密码错误!');
              }
            })
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/index';

  .login-container {
    background-color: @block-bg;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 40px 60px;
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      color: #666;
      text-align: center;
      margin-bottom: 20px;
    }
  }
</style>

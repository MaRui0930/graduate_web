<template>
  <div>
    <el-form :rules="rules" class="login-container" label-position="left" :model="loginForm"
             label-width="0px" v-loading="loading">
      <h3 class="login_title">请登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.userName"
                  auto-complete="off" placeholder="账号"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password"
                  auto-complete="off" placeholder="密码"/>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%" @click="submitClick">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>


export default {
  name: "Login",
  data() {
    return {
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
      checked: true,
      loginForm: {
        userName: '',
        password: '',
        captcha: null
      },
      loading: false
    }
  },
  methods: {
    submitClick() {
      this.$store.dispatch('login',this.loginForm).then(()=>{
        this.$router.replace('/visible/general')
      },()=>this.$alert('用户名或密码错误'))
    },
  },
}
</script>

<style scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 100px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

</style>

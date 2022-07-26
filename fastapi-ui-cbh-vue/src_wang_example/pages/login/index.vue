<template>
  <div class="login-page">
    <div class="loginbox">
      <el-input
        class="customer"
        v-model="username"
        prefix-icon="el-icon-user"
        placeholder="请输入内容"
      ></el-input>
      <br />
      <el-input
        class="password mt-20"
        placeholder="请输入密码"
        prefix-icon="el-icon-key"
        v-model="password"
        show-password
      ></el-input>
      <br />
      <!-- `checked` 为 true 或 false -->
      <div class="autologin">
        <el-row>
          <el-col :span="12" style="text-align: left">
            <el-checkbox
              v-model="checked"
              style="height: 30px; line-height: 30px"
              >自动登录</el-checkbox
            >
          </el-col>
          <el-col :span="12" style="text-align: right">
            <span
              style="
                height: 30px;
                line-height: 30px;
                color: rgb(24, 144, 255);
                cursor: pointer;
              "
              >忘记密码？</span
            >
          </el-col>
        </el-row>
      </div>
      <el-button type="primary" class="mt-20" @click="handleLogin"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script>
import userApi from "@/api/user.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      checked: "",
    };
  },
  methods: {
    async handleLogin() {
      let params = {
        username: this.username,
        password: this.password,
      };
      console.log("点击了登录按钮", params);
      let res = await userApi.login(params);
      console.log("请求成功拉", res);
      if (res.data.token) {
        this.$message.success(res.message);
        localStorage.setItem("token", res.data.token);
        this.$router.push("/home"); // 登陆成功 跳转 home 页面
      } else {
        this.$message.error(res.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$login-box-width: 300px;

.login-page {
  .loginbox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    //border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
    padding: 20px;

    .el-input.customer {
      width: $login-box-width;
    }

    .el-input.password {
      width: $login-box-width;
    }

    .autologin {
      width: $login-box-width;
      /* 上右下左 */
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
      /* margin: 20px auto 0 auto; */
      /* text-align: left; */
    }
  }
  .el-button--primary {
    width: $login-box-width;
  }
}

::v-deep {
  .el-link--default:hover {
    text-decoration: none;
  }
}
</style>

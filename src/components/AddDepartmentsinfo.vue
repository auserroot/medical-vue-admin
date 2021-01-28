<!-- AddDoctorinfo -->
<template>
  <div class="Doctorinfo">
    <!-- header -->
    <div class="header">
      <el-dropdown>
        <p class="img"><img src="../assets/u2705.svg" alt="" /></p>
        <span class="el-dropdown-link">
          Sam<img
            class="el-icon-arrow-down el-icon--right"
            src="../assets/u2701.svg"
          />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><el-button @click="changepwd" style="border: none"
              >修改密码</el-button
            ></el-dropdown-item
          >
          <el-dropdown-item
            ><el-button @click="signout" style="border: none"
              >退出</el-button
            ></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- Doctorinfo -->
    <div class="info">
      <div class="info-head">
        <div class="h-left">
          <span class="line"></span>
          <h1>新增科室信息</h1>
        </div>
      </div>
      <!-- main -->
      <div class="main">
        <div class="m-heade">
          <h3>编辑科室信息</h3>
        </div>

        <div class="m-from">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="科室名称" prop="name">
              <el-input
                v-model="ruleForm.name"
                class="input"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>

            <el-form-item label="所属院区" prop="address">
              <el-select v-model="ruleForm.address" placeholder="请选择院区">
                <el-option label="东院区" value="dong"></el-option>
                <el-option label="北院区" value="bei"></el-option>
                <el-option label="西院区" value="xi"></el-option>
                <el-option label="南院区" value="nan"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="上级科室" prop="mainjor">
              <el-cascader v-model="ruleForm.mainjor" :options="options">
              </el-cascader>
            </el-form-item>

            <el-form-item label="科室位置" prop="info">
              <el-input
                type="textarea"
                class="input"
                v-model="ruleForm.info"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>

            <el-form-item label="科室状态" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                style="width: 120px"
                >保存</el-button
              >
              <el-button @click="resetForm('ruleForm')" style="width: 120px"
                >取消</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      value: [],
      options: [
        {
          value: "neike",
          label: "内科",
        },
        {
          value: "neike",
          label: "外科",
        },
        {
          value: "neike",
          label: "男科",
        },
        {
          value: "neike",
          label: "妇科",
        },
      ],
      ruleForm: {
        name: "",
        id: "",
        address: "",
        tower: "",
        mainjor: "",
        time: "",
        info: "",
        delivery: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入医生姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        address: [{ required: true, message: "请选择院区", trigger: "change" }],
      },
      imageUrl: "",
    };
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          this.$message({
            message: "添加成功",
            type: "success",
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    changepwd() {
      this.$router.push("/systemseting");
    },
    signout() {
      this.$http.get("/signout").then((res) => {
        console.log(res);
        if (res.status == 1) {
          this.$message({
            message: "退出成功",
            type: "success",
          });
          this.$router.push("/");
        }
      });
    },
  },
};
</script>
<style lang='less' scoped>
.Doctorinfo {
  width: 100%;
  height: 100%;
  background: #f3f8ff;
  .header {
    height: 64px;
    width: 100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    background: #fff;
  }

  .info {
    width: 100%;
    min-height: 60px;
    box-sizing: border-box;
    .info-head {
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .h-left {
        display: flex;
        justify-content: center;
        .line {
          display: block;
          width: 25px;
          height: 6px;
          border-radius: 3px;
          background: #1a7dff;
          align-self: center;
        }
        h1 {
          font-size: 30px;
          font-weight: 400;
        }
      }
    }
    .main {
      width: 90%;
      min-width: 700px;
      height: 840px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
      margin: 0 auto;
      // padding: 26px;
      .m-heade {
        height: 48px;
        width: 100%;
        background: #f2f2f2;
        h3 {
          font-size: 16px;
          font-weight: 400;
          line-height: 48px;
          color: #006eff;
          text-indent: 20px;
        }
      }
      .m-from {
        padding: 10px 20px;
        .el-upload {
          border: 2px dashed #666666;
        }
        .avatar-uploader .el-upload {
          border: 1px dashed #666666;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
          border-color: #409eff;
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 110px;
          height: 110px;
          line-height: 110px;
          text-align: center;
        }
        .avatar {
          width: 110px;
          height: 110px;
          display: block;
          background: #fafafa;
        }
        .txt {
          font-size: 12px;
          display: block;
          margin-top: -80px;
        }
      }
    }
  }
}
.input {
  width: 320px;
}
.el-pagination {
  margin-top: 10px;
}
.color {
  background: #dbebff;
  color: #006eff;
  border: none;
}
el-option {
  height: 160px;
}
.el-dropdown {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 20px;
  .img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #1a7dff;
    align-self: center;
    img {
      width: 20px;
      height: 20px;
      margin-top: 7px;
    }
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  margin: 0 10px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>






<!-- Doctorinfo -->
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
          <h1>医生管理</h1>
        </div>
        <div class="right">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :auto-upload="false"
          >
            <el-button type="primary" class="color">导入</el-button></el-upload
          >
          <el-button type="primary" class="color" @click="exportFile"
            >导出</el-button
          >
          <el-button type="primary" :plain="true" class="color" @click="del"
            >删除</el-button
          >
          <el-button type="primary" @click="add">新增医生信息</el-button>
        </div>
      </div>
      <!-- main -->
      <div class="main">
        <div class="m-heade">
          <el-cascader v-model="value" :options="options"> </el-cascader>
          <el-input
            v-model="inputval"
            class="input"
            placeholder="请输人院区或医生姓名"
          ></el-input>
          <el-button type="primary" @click="select">搜索</el-button>
        </div>
        <!-- table -->
        <div class="m-table">
          <el-table
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            ref="multipleTable"
            height="760"
            :data="
              tableData.slice(
                (currentPage - 1) * pagesize,
                pagesize * currentPage
              )
            "
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="name" label="医生姓名" width="120">
              <template slot-scope="scope"
                ><input
                  type="button"
                  v-model="scope.row.name"
                  style="
                    width: 120px;
                    border: none;
                    outline: none;
                    background: none;
                  "
              /></template>
            </el-table-column>
            <el-table-column prop="img" label="医生头像" width="120">
              <template slot-scope="scope"
                ><img class="docimg" :src="scope.row.img" alt=""
              /></template>
            </el-table-column>
            <el-table-column prop="address" label="院区" width="120">
              <template slot-scope="scope"
                ><input
                  type="button"
                  v-model="scope.row.address"
                  style="
                    width: 100px;
                    border: none;
                    outline: none;
                    background: none;
                  "
              /></template>
            </el-table-column>
            <el-table-column prop="title" label="职称" width="120">
              <template slot-scope="scope"
                ><input
                  type="button"
                  v-model="scope.row.title"
                  style="
                    width: 120px;
                    border: none;
                    outline: none;
                    background: none;
                  "
              /></template>
            </el-table-column>
            <el-table-column prop="mainjor" label="科室" width="120">
              <template slot-scope="scope"
                ><input
                  type="button"
                  v-model="scope.row.mainjor"
                  style="
                    width: 120px;
                    border: none;
                    outline: none;
                    background: none;
                  "
              /></template>
            </el-table-column>
            <el-table-column prop="leabl" label="标签" width="200">
              <template slot-scope="scope"
                ><el-tag type="success">{{ scope.row.leabl[0] }}</el-tag
                ><el-tag type="warning">{{ scope.row.leabl[1] }}</el-tag
                ><el-tag type="danger">{{
                  scope.row.leabl[2]
                }}</el-tag></template
              >
            </el-table-column>
            <el-table-column prop="info" label="医生简介" width="300">
              <template slot-scope="scope"
                ><input
                  type="button"
                  v-model="scope.row.info"
                  style="
                    width: 300px;
                    border: none;
                    outline: none;
                    background: none;
                  "
              /></template>
            </el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-popover placement="right" width="400" trigger="click">
                  <el-table :data="gridData">
                    <el-table-column
                      width="120"
                      property="name"
                      label="医生姓名"
                    ></el-table-column>
                    <el-table-column width="160" property="img" label="医生头像"
                      ><img
                        src="img/u2705.67fc6a6d.svg"
                        alt=""
                        style="width: 32px; height: 32px"
                    /></el-table-column>
                    <el-table-column
                      width="120"
                      property="address"
                      label="院区"
                    ></el-table-column>
                    <el-table-column
                      width="120"
                      property="title"
                      label="职称"
                    ></el-table-column>
                    <el-table-column
                      width="160"
                      property="mainjor"
                      label="科室"
                    ></el-table-column>
                    <el-table-column
                      width="200"
                      property="leabl"
                      label="标签"
                    ></el-table-column>
                    <el-table-column
                      width="300"
                      property="info"
                      label="医生简介"
                    ></el-table-column>
                  </el-table>

                  <el-button
                    slot="reference"
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    style="margin-right: 10px"
                    >查看</el-button
                  >
                </el-popover>

                <el-button type="text" size="small" @click="open"
                  >编辑</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页器 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40, 50]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import saveAs from "./FileSaver.min.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loading: true,
      value: [],
      options: [
        {
          value: "neike",
          label: "内科",
          children: [
            {
              value: "xiaohuaneike",
              label: "消化内科",
            },
            {
              value: "xueyeneike",
              label: "血液内科",
            },
            {
              value: "feng",
              label: "风湿内科",
            },
            {
              value: "shen",
              label: "肾内科",
            },
          ],
        },
        {
          value: "waike",
          label: "外科",
          children: [
            {
              value: "xiaohuaneike",
              label: "消化内科",
            },
            {
              value: "xueyeneike",
              label: "血液内科",
            },
            {
              value: "feng",
              label: "风湿内科",
            },
            {
              value: "shen",
              label: "肾内科",
            },
          ],
        },
      ],
      inputval: "",
      multipleSelection: [],
      tableData: [],
      gridData: [],
      pagesize: 10,
      currentPage: 1,
    };
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    input(val) {
      this.inputval = new val();
    },
  },
  //方法集合
  methods: {
    //上传
    submitUpload() {
      this.$refs.upload.submit();
    },
    //导出
    exportFile() {
      var file = new File(this.tableData, "txt文件.txt", {
        type: "text/plain;charset=utf-8",
      });
      saveAs(file);
    },
    // 删除
    del(index) {
      this.tableData.splice(index, 1);
      this.$message({
        message: "删除成功",
        type: "success",
      });
    },
    //跳转添加页面
    add() {
      this.$router.push("/addDoctorinfo");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log(row);
      this.gridData.push(row);
    },
    open() {
      let input = document.getElementsByTagName("input");
      for (let i = 0; i < input.length; i++) {
        input[i].type = "text";
        console.log(input[i]);
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    convert() {
      this.$http.get("/doctor").then((res) => {
        console.log(res);
        this.tableData = res.doctor;
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
    },
    select() {
      console.log(this.inputval);
      let restaurants = [];
      let inputValue = String(this.inputval);
      this.tableData.map(function (item, index) {
        console.log(item, index);
        if (item.name == inputValue || item.address == inputValue) {
          restaurants.push(item);
        }
        console.log(restaurants);
      });
      this.tableData = restaurants;
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
  created() {
    this.convert();
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
      padding: 26px;
      .m-table {
        text-align: right;
        width: 100%;
        min-height: 840px;
        .docimg {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }
    }
  }
}

::v-deep .el-table th,
::v-deep .el-table td {
  text-align: center !important;
}
.upload-demo {
  display: inline-block;
  margin-right: 10px;
}
.el-pagination {
  margin-top: 10px;
}
.input {
  width: 320px;
  margin: 0 10px;
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






<!-- Encyclopedia -->
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
          <h1>健康百科</h1>
        </div>
        <div class="right">
          <el-button type="primary" :plain="true" class="color" @click="del"
            >删除</el-button
          >
          <el-button type="primary" @click="add">新增文章</el-button>
        </div>
      </div>
      <!-- main -->
      <div class="main">
        <div class="m-heade">
          <el-input
            v-model="inputval"
            class="input"
            placeholder="请输入要查找的内容"
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
            tooltip-effect="dark"
            :data="
              tableData.slice(
                (currentPage - 1) * pagesize,
                pagesize * currentPage
              )
            "
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="title" label="文章标题" width="420">
              <template slot-scope="scope"
                ><input
                  type="button"
                  v-model="scope.row.title"
                  style="
                    width: 250px;
                    border: none;
                    outline: none;
                    background: none;
                  "
              /></template>
            </el-table-column>
            <el-table-column prop="pic" label="缩略图" width="240">
              <template slot-scope="scope"
                ><img
                  :src="scope.row.pic"
                  alt=""
                  style="width: 80px; height: 40px"
              /></template>
            </el-table-column>
            <el-table-column prop="author" label="作者" width="200">
              <template slot-scope="scope"
                ><input
                  type="button"
                  v-model="scope.row.author"
                  style="
                    width: 40px;
                    border: none;
                    outline: none;
                    background: none;
                  "
              /></template>
            </el-table-column>
            <el-table-column prop="time" label="操作时间" width="320">
              <template slot-scope="scope">{{ scope.row.time }}</template>
            </el-table-column>

            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-popover placement="right" width="400" trigger="click">
                  <el-table :data="gridData">
                    <el-table-column
                      width="400"
                      property="title"
                      label="文章标题"
                    ></el-table-column>
                    <el-table-column width="160" property="img" label="缩略图"
                      ><img
                        src="img/u2705.67fc6a6d.svg"
                        alt=""
                        style="width: 32px; height: 32px"
                    /></el-table-column>
                    <el-table-column
                      width="160"
                      property="author"
                      label="作者"
                    ></el-table-column>
                    <el-table-column
                      width="200"
                      property="time"
                      label="操作时间"
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
                <el-button type="text" @click="open" size="small"
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
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loading: true,
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
  watch: {},
  //方法集合
  methods: {
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
      this.$router.push("/addEncyclopediainfo");
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
      this.$http.get("/doc").then((res) => {
        console.log(res);
        this.tableData = res.doc;
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
        if (
          item.title == inputValue ||
          item.author == inputValue ||
          item.time == inputValue ||
          item.title.indexOf(inputValue) != -1 ||
          item.author.indexOf(inputValue) != -1 ||
          item.time.indexOf(inputValue) != -1
        ) {
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






<!--  -->
<template>
  <div class="Cost">
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
    <div class="costBox">
      <div class="info-head">
        <div class="h-left">
          <span class="line"></span>
          <h1>退款</h1>
        </div>
      </div>
      <div class="CostRecord">
        <div class="block">
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>

        <div class="costSelect">
          <el-input
            placeholder="请输入病人姓名/就诊卡号"
            v-model="input3"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getCost(input3)"
            ></el-button>
          </el-input>
        </div>
      </div>
      <div class="recordTable">
        <el-table
          class="record-table"
          ref="multipleTable"
          :data="
            tableData.slice(
              (currentPage - 1) * pagesize,
              currentPage * pagesize
            )
          "
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="操作时间" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="order" label="单号" width="130">
          </el-table-column>
          <el-table-column prop="name" label="患者姓名" width="120">
          </el-table-column>

          <el-table-column
            prop="MedicalCardNumber"
            label="就诊卡号"
            width="130"
          >
          </el-table-column>
          <el-table-column prop="paySource" label="来源" width="100">
          </el-table-column>
          <el-table-column prop="BusinessTypes" label="业务类型" width="100">
          </el-table-column>
          <el-table-column prop="payMethod" label="退款方式" width="100">
          </el-table-column>
          <el-table-column prop="payAmount" label="退款金额" width="100">
          </el-table-column>
          <el-table-column prop="paymentStatus" label="退款状态" width="100">
          </el-table-column>
          <el-table-column prop="remaining" label="卡内余额" width="100">
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
                class="el-icon-s-order"
              >
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="block pagination">
        <el-pagination
          class="blockPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      input3: "",
      activeIndex: "1",
      activeIndex2: "1",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      tableData: [],
      currentPage: 1,
      pagesize: 5,
      total: 0,
      multipleSelection: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    deleteRow(index, rows) {
      this.$router.push("/refund/refundDetial/" + rows[index].id);
      this.$store.commit("REFUNDDETIAL", rows);
    },

    getCost: async function (input3) {
      let res = await this.$http.get("refund", {});
      this.tableData = [];
      res.tableData.forEach((e) => {
        if (e.MedicalCardNumber == input3 || e.name == input3) {
          this.tableData.push(e);
        }
      });

      //  this.tableData=res.tableData;
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(size) {
      this.pagesize = size;
      console.log(this.pagesize);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage);
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
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.Cost {
  // width: 1280px;
  width: 100%;

  background: #f3f8ff;
  .header {
    height: 64px;
    width: 100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    background: #fff;
    // text-align: right;


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
  }
  .costBox {
    width: 1260px;
    position: relative;
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
    .CostRecord {
      .block {
        position: absolute;
        left: 61px;
        top: 100px;
      }

      .ks {
        width: 130px;
        height: 40px;
        position: absolute;
        left: 418px;
        top: 100px;
        float: left;
        border: solid 1px #e6e6e6;
        .submenu {
          width: 120px;
          height: 40px;
          line-height: 40px;
          .submenu_title {
            height: 40px;
            line-height: 40px;
          }
        }
      }

      .costSelect {
        position: absolute;
        left: 558px;
        top: 100px;

        width: 320px;
      }
    }
    .recordTable {
      .record-table {
        position: absolute;
        top: 160px;
        left: 60px;
        font-size: 12px;
      }
    }
    .pagination {
      .blockPage {
        position: absolute;
        top: 780px;
        right: 20px;
      }
    }
  }
}
.ks > .el-submenu .el-submenu__title {
  height: 40px;
  line-height: 40px;
} 
</style>
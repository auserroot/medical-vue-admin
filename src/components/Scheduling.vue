<!-- 医生排班 -->
<template>
  <div class="">
    <!-- <h1>医生排班</h1> -->
    <div class="header">
      <a><img src="../assets/u2705.svg"/></a>
      <el-dropdown>
        <span class="el-dropdown-link">
          sam<i class="el-icon-arrow-down el-icon--right"></i>
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
    <div class="name">
      <div class="icon"></div>
      <div class="text">医生排班</div>
      <div class="box">
        <div class="top">
          <el-radio-group size="small" v-model="radio">
            <el-radio-button label="left">上周</el-radio-button>
            <el-radio-button label="centre">本周</el-radio-button>
            <el-radio-button label="right">下周</el-radio-button>
          </el-radio-group>
          <div class="inp">
          <el-input v-model="inp" placeholder="请输入内容"></el-input>
          <el-button type="primary" @click="Search">搜索</el-button>
          </div>
        </div>
        <el-table
    style="width:100%;height:70vh "
    height="700"
    :data="tableData"
    class="table"
    >
    <el-table-column
      prop="name"
      label="医生姓名"
      width="100">
    </el-table-column>
      <el-table-column
        prop="department"
        label="科室"
        width="80">
      </el-table-column>
<el-table-column label="星期一">
      <el-table-column
        prop="monAm"
        label="上午"
        width="80">
      </el-table-column>
      <el-table-column
        prop="monPm"
        label="下午"
        width="80">
      </el-table-column>
</el-table-column>
<el-table-column label="星期二">
      <el-table-column
        prop="tueAm"
        label="上午"
        width="80">
      </el-table-column>
      <el-table-column
        prop="tuePm"
        label="下午"
        width="80">
      </el-table-column>
</el-table-column>
<el-table-column label="星期三">
      <el-table-column
        prop="webAm"
        label="上午"
        width="80">
      </el-table-column>
      <el-table-column
        prop="webPm"
        label="下午"
        width="80">
      </el-table-column>
</el-table-column>
<el-table-column label="星期四">
      <el-table-column
        prop="thursAm"
        label="上午"
        width="80">
      </el-table-column>
      <el-table-column
        prop="thursPm"
        label="下午"
        width="80">
      </el-table-column>
</el-table-column>
<el-table-column label="星期五">
      <el-table-column
        prop="firAm"
        label="上午"
        width="80">
      </el-table-column>
      <el-table-column
        prop="firPm"
        label="下午"
        width="80">
      </el-table-column>
</el-table-column>
<el-table-column label="星期六">
      <el-table-column
        prop="staAm"
        label="上午"
        width="80">
      </el-table-column>
      <el-table-column
        prop="staPm"
        label="下午"
        width="80">
      </el-table-column>
</el-table-column>
<el-table-column label="星期天">
      <el-table-column
        prop="sunAm"
        label="上午"
        width="80">
      </el-table-column>
      <el-table-column
        prop="sunPm"
        label="下午"
        width="80">
      </el-table-column>
</el-table-column>
        </el-table>
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="num">
    </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        radio:'centre',
        inp:'',
        // department:'',
        tableData:[],
        num:0,
        expands:[],
        arr:[],
        val:20,
        
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  /* "obj1": {
        "name": "王二",
        "department": "肾内科",
        "monAm": "上班",
        "monPm": "上班",
        "tueAm": "休假",
        "tuePm": "休假",
        "webAm": "上班",
        "webPm": "上班",
        "thursAm": "休假",
        "thursPm": "休假",
        "firAm": "上班",
        "firPm": "上班",
        "staAm": "休假",
        "staPm": "休假",
        "sunAm": "上班",
        "sunPm": "上班"
      },
      "obj2": {
        "name": "赵三",
        "department": "肾内科",
        "monAm": "休假",
        "monPm": "休假",
        "tueAm": "上班",
        "tuePm": "上班",
        "webAm": "休假",
        "webPm": "休假",
        "thursAm": "上班",
        "thursPm": "上班",
        "firAm": "休假",
        "firPm": "休假",
        "staAm": "上班",
        "staPm": "上班",
        "sunAm": "上班",
        "sunPm": "上班"
      } */
  watch: {},
  //方法集合
  methods: {
      handleSizeChange(val) {
        this.val=val
        this.tableData=this.expands.slice(0,val)
      }, 
      handleCurrentChange(val) {
        this.tableData=this.expands.slice(0+this.val*(val-1),val*this.val)
      },
      Search:function(){
      this.tableData = [];
        this.expands.map((item,index)=>{
          if(item.name.indexOf(this.inp)!=-1||
             item.department.indexOf(this.inp)!=-1
             ){
            this.tableData.push(item)
          }
        })
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
  created() {
    axios.get('http://rap2api.taobao.org/app/mock/276507/offtime',{
      name:'',
    }).then((res)=>{
      this.tableData=res.data.arr.slice(0,20),
      this.expands=res.data.arr,
      this.num=this.expands.length
      console.log(res)
    })
  },
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
<style  scoped>
.header {
  display: flex;
  height: 64px;
  width: 100%;
  justify-content: flex-end;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.header > a {
  /* float: right; */
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: blue;
  align-self: center;
  margin: 5px 5px;
}
.el-dropdown-link {
  align-self: center;
  line-height: 64px;
}
.header > a > img {
  width: 23px;
  height: 23px;
  margin:4px  0  0 4px;
}
.name {
  border-width: 0px;
  position: relative;
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
}
.icon {
  border-width: 0px;
  position: absolute;
  left: 40px;
  top: 33px;
  width: 24px;
  height: 8px;
  background: inherit;
  background-color: rgba(0, 110, 255, 1);
  border: none;
  border-radius: 4px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
  color: #006eff;
}
.text {
  width: 100px;
  height: 30px;
  position: absolute;
  left: 80px;
  top: 21px;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  letter-spacing: 1px;
  
  /* background: blue; */
}
.box {
  border-width: 0px;
  position: absolute;
  left: 80px;
  top: 70px;
  min-width: 1280px;
  min-height: 200px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(215, 215, 215, 1);
  
}
.top{
    display: flex;
    justify-content:flex-start;
    min-height: 86px;
}
.el-radio-group{
    align-self: center;
}
.inp{
    display: flex;
    margin:0 10px;
    align-self: center;
}
.el-input{
    margin: 0 10px;
}
.el-dropdown {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 20px;
  justify-content: center ;
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
<!--  -->
<template>
  <div class="">
    <!-- <h1>医院导航</h1> -->
    <div class="header">
      <a><img src="../assets/u2705.svg" /></a>
      <el-dropdown>
        <span class="el-dropdown-link">
          sam<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="name">
      <div class="icon"></div>
      <div class="text">医院导航</div>
      <div class="box">
        <div class="top">
          <el-input
            class="input"
            v-model="hospital"
            placeholder="请输入内容"
          ></el-input>
          <el-button type="primary" @click="Inquire">搜索</el-button>
          <el-button type="primary" @click="Goto">新增院区</el-button>
        </div>
        <template>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="70"> 
            </el-table-column>
            <el-table-column label="院区" width="190"  prop="inpatient">
               <template slot-scope="scope">
                  <input type="text" class="inpchange"  v-model="tableData[scope.$index].inpatient">
                </template>
            </el-table-column>
            <el-table-column prop="site" width="190" label="地址" >
              <template slot-scope="scope">
                  <input type="text" class="inpchange"  v-model="tableData[scope.$index].site">
                </template>
            </el-table-column>
            <el-table-column prop="phone" width="160" label="电话1" >
              <template slot-scope="scope">
                  <input type="text" class="inpchange"  v-model="tableData[scope.$index].phone">
                </template>
            </el-table-column>
            <el-table-column prop="phone1" width="160" label="电话2" >
              <template slot-scope="scope">
                  <input type="text" class="inpchange"  v-model="tableData[scope.$index].phone1">
                </template>
            </el-table-column>
            <el-table-column prop="traffic" width="250" label="出行方式" >
              <template slot-scope="scope">
                  <input type="text" class="inpchange"  v-model="tableData[scope.$index].traffic">
                </template>
            </el-table-column>
            <el-table-column prop="time" width="190" label="操作时间" >
            </el-table-column>
            <el-table-column prop="operation" width="190" label="操作" >
                <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
            </el-table-column>
          </el-table>
        </template>
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
      hospital: "",
      tableData: [],
      multipleSelection:[],
      expands:[],
      num:0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      Goto(){
        this.$router.push("addsite") 
      },
      Inquire(){
        this.tableData = [];
        this.expands.map((item,index)=>{
          if(item.inpatient.indexOf(this.hospital)!=-1||
             item.site.indexOf(this.hospital)!=-1||
             item.phone.indexOf(this.hospital)!=-1||
             item.phone1.indexOf(this.hospital)!=-1||
             item.time.indexOf(this.hospital)!=-1
             ){
            this.tableData.push(item)
          }
        })
      }
  },
  /*{
		{
          "inpatient":'深圳市龙华区人民医院',
          "site":'深圳市龙华区建设东路',
          "phone":'120',
          "phone1":'120',
          "traffic":'市内乘4、5、20、24、27、49、46路车可直达',
          "time":'2021/01/01',
          "phne":'120',+
      	},
		{
          "inpatient":'北京大学深圳医院',
          "site":'深圳市福田区莲花路1120号',
          "phone":'(0755)83923333',
          "phone1":'120',
          "traffic":'市内乘4、5、20、24、27、49、46路车可直达',
          "time":'2021/01/01',
          "phne":'120',
      	},
		{
          "inpatient":'深圳市宝安区中医院',
          "site":'深圳市宝安区裕安二路25号',
          "phone":'(0755)29629366',
          "phone1":'(0755)29629333',
          "traffic":'市内乘4、5、20、24、27、49、46路车可直达',
          "time":'2021/01/01',
          "phne":'120',
      	},
		{
          "inpatient":'深圳市南山区人民医院',
          "site":'深圳市南山区桃园路89号',
          "phone":'(0755)26553111',
          "phone1":'120',
          "traffic":'市内乘4、5、20、24、27、49、46路车可直达',
          "time":'2021/01/01',
          "phne":'120',
     	 },
}*/
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
       axios.get('http://rap2api.taobao.org/app/mock/276507/map',{
      key:'map',
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
  height: 820px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(215, 215, 215, 1);
  text-align: center;
}

.top {
  display: flex;
  margin: 0 10px;
  align-self: center;
}
.input {
  width: 200px;
  margin: 0 20px;
}
.inpchange{
  border: 0;
  background:white;
  outline: none;
  background: none;
}

</style>
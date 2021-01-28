<!--  -->
<template>
  <div class="">
    <div class="header">
      <a><img alt="" /></a>
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
      <div class="text">管理员管理</div>
      <div class="box">
        <div class="top">
          <el-input class="inp" placeholder="请输入内容"> </el-input>
          <el-button class="btn" type="primary" @click="searchName"
            >搜索</el-button
          >
          <el-button class="btn" type="primary" @click="Goto"
            >新增角色</el-button
          >
        </div>
        <div class="bottom">
          <template>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="70"> </el-table-column>
              <el-table-column label="用户名" width="190" prop="user">
              </el-table-column>
              <el-table-column prop="account" width="190" label="账号">
              </el-table-column>
              <el-table-column prop="job" width="160" label="角色">
              </el-table-column>
              <el-table-column prop="phone" width="160" label="手机号码">
              </el-table-column>
              <el-table-column prop="if" width="250" label="是否启用">
                <template slot-scope="scope">
                  <el-switch
                    v-model="tableData[scope.$index].if"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                  >
                  </el-switch>
                </template>
              </el-table-column>
              <el-table-column prop="time" width="190" label="添加时间">
              </el-table-column>
              <el-table-column prop="operation" width="190" label="操作">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
<style  scoped>
</style>
<!-- 首页 -->
<template>
  <div class="index">
    <el-row>
      <el-col :span="3">
        <div class="logo">
          <a>
          </a>
          <span>医疗服务后台</span>
        </div>
        <el-menu
          default-active="2"
          background-color="#1a7dff"
          text-color="#fff"
          active-background-color='#006eff'
          active-text-color="#ffd04b"
          :style="{ height: '100vh' }"
          router
        >
        <el-menu-item index='/dashboard'>
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index='booking'>
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>预约管理</span>
            </template>
            <el-menu-item index='/reserve'>预约挂号</el-menu-item>
            <el-menu-item index='/scheduling'>医生排班</el-menu-item>
          </el-submenu>
          <el-submenu index='cost'>
            <template slot="title">
              <i class="el-icon-s-finance"></i>
              <span>费用管理</span>
            </template>
            <el-menu-item index='/cost'>门诊消费记录</el-menu-item>
            <el-menu-item index='/pay'>门诊充值记录</el-menu-item>
            <el-menu-item index='/refund'>退款记录</el-menu-item>
          </el-submenu>
          <el-submenu index='hospital '>
            <template slot="title">
              <i class="el-icon-folder-opened"></i>
              <span>医院信息</span>
            </template>
            <el-menu-item index="/doctor">医生管理</el-menu-item>
            <el-menu-item index='/departments'>科室管理</el-menu-item>
            <el-menu-item index='/encyclopedia'>健康百科</el-menu-item>
            <el-menu-item index='/map'>医院导航</el-menu-item>
            <el-menu-item index='/hospitalinfo'>医院简介</el-menu-item>
            <el-menu-item index='/booking'>预约须知</el-menu-item>
          </el-submenu>
          <el-submenu index='setting'>
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item index='/administrator'>管理员管理</el-menu-item>
            <el-menu-item index='/management'>角色管理</el-menu-item>
            <el-menu-item index='/post'>职称管理</el-menu-item>
            <el-menu-item index='/message'>消息公告</el-menu-item>
            <el-menu-item index='/systemseting'>修改密码</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
};
</script>
<style  scoped>
.logo{
  background:#1a7dff;
  height: 90px;
  display: flex;
  justify-content: center;
}
.logo>a{
  display: block;
  height: 32px;
  width: 32px;
  background: url(../assets/logo.png) no-repeat ;
  background-size: 100% 100%;
  align-self: center;
  /* position: absolute; */
  /* top:0px; */
}
.logo>span{
  color: #fff;
  font-size: 18px;
  line-height: 90px;
}
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 100px;
}
</style>
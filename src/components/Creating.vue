<!-- Creating  -->
<template>
  <div class="">
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
      <div class="text">新增角色</div>
      <div class="box">
        <div class="demo-input-suffix">
          <span>联系电话:</span>
          <el-input placeholder="请输入内容"> </el-input>
        </div>
        <div class="demo-input-suffix">
          <span>联系电话:</span>
          <el-input placeholder="请输入内容"> </el-input>
        </div>
        <div class="demo-input-suffix">
          <span>联系电话:</span>
          <el-input placeholder="请输入内容"> </el-input>
        </div>
        <div class="demo-input-suffix">
          <span>联系电话:</span>
          <el-input placeholder="请输入内容"> </el-input>
        </div>
        <div class="demo-input-suffix">
          <span>联系电话:</span>
          <el-input placeholder="请输入内容"> </el-input>
        </div>
        <div class="demo-input-suffix">
          <span>联系电话:</span>
          <el-switch
            v-model="val"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </div>
        <div class="demo-input-suffix">
          <el-button class="btn" type="primary" @click="Back"
            >新增角色</el-button
          >
          <el-button class="btn" type="primary" @click="Goto"
            >新增角色</el-button
          >
        </div>
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
      val: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    Back() {
      this.$router.push("administrator");
    },
    Goto() {
      this.$router.push("administrator");
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
  margin: 4px 0 0 4px;
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
  width: 150px;
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
.demo-input-suffix {
  display: flex;
  width: 500px;
  margin: 25px 0;
  
}
.demo-input-suffix > span {
  width: 100px;
  color: #ccc;
  font-size: 14px;
  line-height: 40px;
}
</style>
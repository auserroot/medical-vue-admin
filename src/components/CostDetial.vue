<!--  -->
<template>
<div class='costDetial' >
    
<div class="costDetialTable">
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>患者信息</span>
  </div>
  <div v-for="(item,index) in patientsList" :key="index" class="text ss item "  >
     <span>{{item.value}}</span><span>{{items[item.key]}} </span>
  </div>
</el-card>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>就诊信息</span>
  </div>
  <div v-for="(item,index) in MedicalInformation" :key="index" class="text ss item "  >
     <span>{{item.value}}</span><span>{{items[item.key]}} </span>
  </div>
</el-card>

<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>订单信息</span>
  </div>
  <div v-for="(item,index) in order" :key="index" class="text ss item "  >
     <span>{{item.value}}</span><span>{{items[item.key]}} </span>
  </div>
  <div class="bz">
    <span class="ddbz">订单备注</span>
 <el-input v-model="input" placeholder="请输入内容"></el-input>
 <el-button type="primary">保存</el-button>
<el-button type="primary" plain>取消</el-button>
  </div>
</el-card>

</div>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    props: {
    id: {
      type: String,
      required: true
    }
  },
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  input:'',
patientsList:[
  
  { key:"name",
    value:"患者姓名"
  },
   { key:"MedicalCardNumber",
   value:"就诊卡号"
  },

 
{ key:"cardtype",
   value:"证件类型"
  },
 { key:"cardnum",
    value:"证件号码"
  },
 { key:"wx",
   value:"微信昵称"
  },
  { key:"phone",
    value:"手机号码"
  },
 { key:"relationShip",
   value:"关系"
  },
   { key:"address",
    value:"就诊人地址"
  },

  ],
MedicalInformation:[
  { key:"hosname",
    value:"就诊医院"
  },
   { key:"hosaddress",
   value:"医院地址"
  },

 
{ key:"department",
   value:"就诊科室"
  },
 { key:"docName",
    value:"就诊医生"
  },
 { key:"docCall",
   value:"医生职称"
  },
  { key:"CostType",
    value:"费用类型"
  },
 { key:"BusinessTypes",
   value:"业务类型"
  },
],
order:[
  { key:"payAmount",
    value:"订单总额"
  },
   { key:"paytype",
   value:"支付方式"
  },

 
{ key:"remaining",
   value:"卡内余额"
  },
 { key:"paymentStatus",
    value:"订单状态"
  },
 { key:"order",
   value:"订单编号"
  },
  { key:"date",
    value:"订单时间"
  }
]
};
},
//监听属性 类似于data概念
computed: {
     items: function() {
    let id = this.id
 return this.$store.state.costdetial[this.$store.state.costdetial.findIndex(ele=>ele.id==id)]
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  lang="less" scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
text-align: left;
    width: 1280px;

  .ss{
    margin-bottom: 30px;
     text-align: left;
    font-size: 14px;
  width: 300px;
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 30px;
  float:left;
  span{
    width: 100px;
    display: inline-block;
    
  }
  span:nth-of-type(2){
width: 180px
  }
}
.bz{
 
  .ddbz{
    width: 150px;
    float: left;
    margin-left: 50px;
    height: 40px;
    line-height: 40px;
  }
  .el-input{
    width: 300px;
  }
}


  }
</style>


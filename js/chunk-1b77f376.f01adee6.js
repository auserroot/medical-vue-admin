(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b77f376"],{"0978":function(t,e,a){},c311:function(t,e,a){"use strict";a("0978")},da78:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Doctorinfo"},[n("div",{staticClass:"header"},[n("el-dropdown",[n("p",{staticClass:"img"},[n("img",{attrs:{src:a("51ef"),alt:""}})]),n("span",{staticClass:"el-dropdown-link"},[t._v(" Sam"),n("img",{staticClass:"el-icon-arrow-down el-icon--right",attrs:{src:a("c991")}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("el-button",{staticStyle:{border:"none"},on:{click:t.changepwd}},[t._v("修改密码")])],1),n("el-dropdown-item",[n("el-button",{staticStyle:{border:"none"},on:{click:t.signout}},[t._v("退出")])],1)],1)],1)],1),n("div",{staticClass:"info"},[n("div",{staticClass:"info-head"},[t._m(0),n("div",{staticClass:"right"},[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1}},[n("el-button",{staticClass:"color",attrs:{type:"primary"}},[t._v("导入")])],1),n("el-button",{staticClass:"color",attrs:{type:"primary"},on:{click:t.exportFile}},[t._v("导出")]),n("el-button",{staticClass:"color",attrs:{type:"primary",plain:!0},on:{click:t.del}},[t._v("删除")]),n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("新增医生信息")])],1)]),n("div",{staticClass:"main"},[n("div",{staticClass:"m-heade"},[n("el-cascader",{attrs:{options:t.options},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("el-input",{staticClass:"input",attrs:{placeholder:"请输人院区或医生姓名"},model:{value:t.inputval,callback:function(e){t.inputval=e},expression:"inputval"}}),n("el-button",{attrs:{type:"primary"},on:{click:t.select}},[t._v("搜索")])],1),n("div",{staticClass:"m-table"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",height:"760",data:t.tableData.slice((t.currentPage-1)*t.pagesize,t.pagesize*t.currentPage),"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{prop:"name",label:"医生姓名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.row.name,expression:"scope.row.name"}],staticStyle:{width:"120px",border:"none",outline:"none",background:"none"},attrs:{type:"button"},domProps:{value:e.row.name},on:{input:function(a){a.target.composing||t.$set(e.row,"name",a.target.value)}}})]}}])}),n("el-table-column",{attrs:{prop:"img",label:"医生头像",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticClass:"docimg",attrs:{src:t.row.img,alt:""}})]}}])}),n("el-table-column",{attrs:{prop:"address",label:"院区",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.row.address,expression:"scope.row.address"}],staticStyle:{width:"100px",border:"none",outline:"none",background:"none"},attrs:{type:"button"},domProps:{value:e.row.address},on:{input:function(a){a.target.composing||t.$set(e.row,"address",a.target.value)}}})]}}])}),n("el-table-column",{attrs:{prop:"title",label:"职称",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.row.title,expression:"scope.row.title"}],staticStyle:{width:"120px",border:"none",outline:"none",background:"none"},attrs:{type:"button"},domProps:{value:e.row.title},on:{input:function(a){a.target.composing||t.$set(e.row,"title",a.target.value)}}})]}}])}),n("el-table-column",{attrs:{prop:"mainjor",label:"科室",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.row.mainjor,expression:"scope.row.mainjor"}],staticStyle:{width:"120px",border:"none",outline:"none",background:"none"},attrs:{type:"button"},domProps:{value:e.row.mainjor},on:{input:function(a){a.target.composing||t.$set(e.row,"mainjor",a.target.value)}}})]}}])}),n("el-table-column",{attrs:{prop:"leabl",label:"标签",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.leabl[0]))]),n("el-tag",{attrs:{type:"warning"}},[t._v(t._s(e.row.leabl[1]))]),n("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.leabl[2]))])]}}])}),n("el-table-column",{attrs:{prop:"info",label:"医生简介",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.row.info,expression:"scope.row.info"}],staticStyle:{width:"300px",border:"none",outline:"none",background:"none"},attrs:{type:"button"},domProps:{value:e.row.info},on:{input:function(a){a.target.composing||t.$set(e.row,"info",a.target.value)}}})]}}])}),n("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[n("el-table",{attrs:{data:t.gridData}},[n("el-table-column",{attrs:{width:"120",property:"name",label:"医生姓名"}}),n("el-table-column",{attrs:{width:"160",property:"img",label:"医生头像"}},[n("img",{staticStyle:{width:"32px",height:"32px"},attrs:{src:"img/u2705.67fc6a6d.svg",alt:""}})]),n("el-table-column",{attrs:{width:"120",property:"address",label:"院区"}}),n("el-table-column",{attrs:{width:"120",property:"title",label:"职称"}}),n("el-table-column",{attrs:{width:"160",property:"mainjor",label:"科室"}}),n("el-table-column",{attrs:{width:"200",property:"leabl",label:"标签"}}),n("el-table-column",{attrs:{width:"300",property:"info",label:"医生简介"}})],1),n("el-button",{staticStyle:{"margin-right":"10px"},attrs:{slot:"reference",type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}},slot:"reference"},[t._v("查看")])],1),n("el-button",{attrs:{type:"text",size:"small"},on:{click:t.open}},[t._v("编辑")])]}}])})],1),n("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,40,50],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:100},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-left"},[a("span",{staticClass:"line"}),a("h1",[t._v("医生管理")])])}],o=(a("c975"),a("d81d"),a("a434"),a("b0c0"),a("72ec")),i=a.n(o),s={components:{},data:function(){return{loading:!0,value:[],options:[{value:"neike",label:"内科",children:[{value:"xiaohuaneike",label:"消化内科"},{value:"xueyeneike",label:"血液内科"},{value:"feng",label:"风湿内科"},{value:"shen",label:"肾内科"}]},{value:"waike",label:"外科",children:[{value:"xiaohuaneike",label:"消化内科"},{value:"xueyeneike",label:"血液内科"},{value:"feng",label:"风湿内科"},{value:"shen",label:"肾内科"}]}],inputval:"",multipleSelection:[],tableData:[],gridData:[],pagesize:10,currentPage:1}},computed:{},watch:{input:function(t){this.inputval=new t}},methods:{submitUpload:function(){this.$refs.upload.submit()},exportFile:function(){var t=new File(this.tableData,"txt文件.txt",{type:"text/plain;charset=utf-8"});i()(t)},del:function(t){this.tableData.splice(t,1),this.$message({message:"删除成功",type:"success"})},add:function(){this.$router.push("/addDoctorinfo")},handleSelectionChange:function(t){this.multipleSelection=t},handleClick:function(t){console.log(t),this.gridData.push(t)},open:function(){for(var t=document.getElementsByTagName("input"),e=0;e<t.length;e++)t[e].type="text",console.log(t[e])},handleSizeChange:function(t){console.log("每页 ".concat(t," 条")),this.pagesize=t},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t},convert:function(){var t=this;this.$http.get("/doctor").then((function(e){console.log(e),t.tableData=e.doctor,setTimeout((function(){t.loading=!1}),500)}))},select:function(){console.log(this.inputval);var t=[],e=String(this.inputval);this.tableData.map((function(a,n){console.log(a,n),a.name!=e&&a.address!=e&&-1==a.name.indexOf(e)&&-1==a.address.indexOf(e)||t.push(a),console.log(t)})),this.tableData=t},changepwd:function(){this.$router.push("/systemseting")},signout:function(){var t=this;this.$http.get("/signout").then((function(e){console.log(e),1==e.status&&(t.$message({message:"退出成功",type:"success"}),t.$router.push("/"))}))}},created:function(){this.convert()}},r=s,c=(a("c311"),a("2877")),u=Object(c["a"])(r,n,l,!1,null,"034616a7",null);e["default"]=u.exports}}]);
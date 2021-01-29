<!-- 预约挂号 -->
<template>
  <div class="reserve">
    <h1><span></span>预约挂号</h1>
    <div class="reserve-main">
      <div class="reserve-main-top">
        <el-radio-group v-model="radio" @change='handleRadio'>
          <el-radio :label="'all'" size="small">全部</el-radio>
          <el-radio :label="'wait'" size="small">待就诊</el-radio>
          <el-radio :label="'finish'" size="small">已就诊</el-radio>
          <el-radio :label="'cancel'" size="small">已取消</el-radio>
        </el-radio-group>
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="~"
          start-placeholder="选择开始日期"
          end-placeholder="选择结束日期"
          size="small"
          class="reserve-top-date">
        </el-date-picker>
        <el-select v-model="department" placeholder="请选择科室"  class="reserve-top-select"
        size="small">
          <el-option-group
            v-for="group in deOptions"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
        <el-autocomplete
          class="reserve-top-input"
          v-model="sename"
          :fetch-suggestions="querySearch"
          placeholder="请输入医生/病人姓名"
          size="small"
        ></el-autocomplete>
        <el-button type="primary" size="small"
        @click="handleSearch">搜索</el-button>
      </div>
      <div class="reserve-main-table">
        <el-table
          :data="reserveDataList"
          style="width: 100%"
          size="mini">
          <el-table-column
            prop="name"
            label="患者姓名"
            width="70">
          </el-table-column>
          <el-table-column
            prop="hosId"
            label="就诊卡号"
            width="95">
          </el-table-column>
          <el-table-column
            prop="id"
            label="身份证号"
            width="85">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号码"
            width="100">
          </el-table-column>
          <el-table-column
            prop="department"
            label="挂号科室"
            width="100">
          </el-table-column>
          <el-table-column
            prop="type"
            label="挂号类型"
            width="80">
          </el-table-column>
          <el-table-column
            prop="fare"
            label="挂号费用"
            width="75">
          </el-table-column>
          <el-table-column
            prop="status"
            label="挂号状态"
            width="80">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="90">
          </el-table-column>
          <el-table-column
            prop="time"
            label="候诊时间"
            width="80">
          </el-table-column>
          <el-table-column
            prop="preTime"
            label="预约时间"
            width="160">
          </el-table-column>
          <el-table-column
            label="操作"
            width="90">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit"
              @click="jumptoResdetail(scope.row)"
              size='small'></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="reserve-main-pagination">
        <el-pagination
        background
        small
        layout="total, prev, pager, next,sizes, jumper"
        @size-change='handleSizeChange'
        @current-change="handleCurrentChange"
        :current-page="offset+1"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="limit"
        :total="total">
      </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      radio: 'all',
      date: '',
      department: '',
      deOptions: [{
        label: '内科',
        options: [{
          value: '消化内科',
          label: '消化内科'
        }, {
          value: '血液内科',
          label: '血液内科'
        }, {
          value: '风湿免疫内科',
          label: '风湿免疫内科'
        }, {
          value: '肾内科',
          label: '肾内科'
        }]
      }, {
        label: '外科',
        options: [{
          value: '骨科',
          label: '骨科'
        }, {
          value: '普通外科',
          label: '普通外科'
        }, {
          value: '外伤外科',
          label: '外伤外科'
        }, {
          value: '整形外科',
          label: '整形外科'
        }]
      }],
      sename: '',
      timeout: null,
      reserveDataList: [],
      limit: 5,
      offset: 0,
      total: 0
    };
  },
  methods: {
    jumptoResdetail(row){
      // console.log(row)
      this.$router.push('/reserve/detail/'+row.deId)
    },
    handleCurrentChange(val){
      this.offset = val - 1
      this.reserveDataList = this.$store.state.reserveTableData.slice(this.offset*this.limit, (this.offset+1)*this.limit)
    },
    handleSizeChange(val) {
      this.limit = val
      this.reserveDataList = this.$store.state.reserveTableData.slice(this.offset*this.limit, (this.offset+1)*this.limit)
    },
    handleRadio() {
      this.$http.post('/registration/msg/getAll',{
        range: 'all'
      }).then(res=>{
        let temp = []
        switch(this.radio) {
          case 'all':
            temp = res.data
            break;
          case 'wait':
            temp = res.data.filter(el=>el.status=='未就诊')
            break;
          case 'finish':
            temp = res.data.filter(el=>el.status=='已就诊')
            break;
          case 'cancel':
            temp = res.data.filter(el=>el.status=='已取消')
            break;
        }
        this.total = temp.length
        this.offset = 0
        this.$store.commit('updateReserveTableData', temp)
        this.reserveDataList = this.$store.state.reserveTableData.slice(0, this.limit)
      })
    },
    //搜索病人或医生姓名
    querySearch(queryString, cb) {
      let temp = this.reserveDataList.map(el=>{
        return el.name
      })
      temp = new Set([...temp, ...this.reserveDataList.map(el=>{
        return el.docName
      })])
      temp = [...temp]
      let result = []
      for(let i in temp){
        let obj = {}
        obj.value = temp[i]
        result.push(obj)
      }
      let filterResult = result.filter(res=>{
        if(res.value.includes(queryString)){
          return true
        }
      })
      cb(filterResult)
    },
    handleSearch() {
      // console.log(this.sename)
      this.reserveDataList = [...this.reserveDataList.filter(el=>el.name.includes(this.sename)),...this.reserveDataList.filter(el=>el.docName.includes(this.sename))]
      this.offset = 0
      this.total = this.reserveDataList.length
    }
  },
  mounted() {
    this.$http.post('/registration/msg/getAll',{
      range: 'all'
    }).then(res=>{
      // console.log(res)
      this.total = res.data.length
      this.$store.commit('updateReserveTableData', res.data)
      this.reserveDataList = this.$store.state.reserveTableData.slice(0, this.limit)
    })
  }
};
</script>
<style lang='less' scoped>
.reserve {
  background: #f3f8ff;
  padding: 0 30px 70px 30px;
  overflow: hidden;
  h1 {
      margin-top: 20px;
      font-size: 24px;
      font-weight: normal;
      color: #333;
      span {
          display: inline-block;
          width: 24px;
          height: 8px;
          border-radius: 4px;
          background: #197cfe;
          vertical-align: middle;
          margin-right: 12px;
      }
  }
  .reserve-main {
    background: #fff;
    margin-top: 30px;
    padding: 25px;
    border-radius: 8px;
    .reserve-main-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .reserve-top-date {
        width: 300px;
      }
      .reserve-top-select {
        width: 160px;
      }
      .reserve-top-input {
        width: 240px;
      }
    }
    .reserve-main-table {
      margin-top: 30px;
    }
    .reserve-main-pagination {
      margin-top: 15px;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
<template>
<div class="home">
    <h1><span></span>首页</h1>
    <h2>数据总览</h2>
    <div class="home-main">
        <div class="home-main-top">
            <div class="home-numcard"
            v-for="(item, index) in cardDateList" :key='index'>
                <div :style="{'background': item.color}">
                    <img :src="'/imgs/index_pic'+(index+1)+'.svg'" alt="">
                </div>
                <div>
                    <h3 v-text="homeCardData[item.key]"></h3>
                    <p v-text="item.value"></p>
                </div>
                <img src="/imgs/index_pic6.svg" alt="">
            </div>
        </div>
        <div class="home-main-center">
            <div class="home-order" ref="orderChart">
            </div>
            <div class="home-pay" ref="payChart">
            </div>
        </div>
        <div class="home-main-bottom">
            <div class="home-registration">
                <h3>实时挂号</h3>
                <el-table
                    :data="$store.state.reserveTableData"
                    style="width: 100%"
                    size="mini"
                    stripe>
                    <el-table-column
                        label="头像"
                        width='70'>
                        <el-avatar icon="el-icon-user-solid" :size='30'></el-avatar>
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="患者姓名"
                        width='80'>
                    </el-table-column>
                    <el-table-column
                        prop="phone"
                        label="患者手机号码"
                        width='120'>
                    </el-table-column>
                    <el-table-column
                        prop="department"
                        label="挂号科室"
                        width='100'>
                    </el-table-column>
                    <el-table-column
                        prop="fare"
                        label="挂号费"
                        width='70'>
                    </el-table-column>
                    <el-table-column
                        prop="preTime"
                        label="挂号时间"
                        width='90'>
                    </el-table-column>
                </el-table>
            </div>
            <div class="home-main-bottom-right">
                <div class="home-hotdepart">
                    <h3>热门科室</h3>
                    <el-table
                        :data="hotDepData"
                        style="width: 100%"
                        size="mini"
                        stripe>
                        <el-table-column
                            label="排名">
                            <span v-text="'hot'"></span>
                        </el-table-column>
                        <el-table-column
                            prop="department"
                            label="科室">
                        </el-table-column>
                        <el-table-column
                            prop="regNum"
                            label="挂号量">
                        </el-table-column>
                    </el-table>
                </div>
                <div class="home-hotdoc">
                    <h3>热门医生</h3>
                    <el-table
                        :data="hotDocData"
                        style="width: 100%"
                        size="mini"
                        stripe>
                        <el-table-column
                            label="排名">
                            <span v-text="'hot'"></span>
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="医生姓名">
                        </el-table-column>
                        <el-table-column
                            prop="regNum"
                            label="挂号量">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            homeCardData: [],
            hotDepData: [],
            hotDocData: [],
            cardDateList: [{
                key: 'orderNum',
                value: '今日预约人数',
                color: '#3888f9'
            },{
                key: 'regNum',
                value: '今日挂号人数',
                color: '#f0737b'
            },{
                key: 'payNum',
                value: '今日门诊充值总额',
                color: '#81e87d'
            },{
                key: 'costNum',
                value: '今日门诊消费总额',
                color: '#fdaf65'
            },{
                key: 'bindNum',
                value: '今日绑卡人数',
                color: '#a545ff'
            }],
        }
    },
    created(){
    },
    mounted(){
        //echarts图表
        let orderChart = this.$echarts.init(this.$refs.orderChart)
        let payChart = this.$echarts.init(this.$refs.payChart)
        this.$http.post('/home/getOrderData').then(res=>{
            // console.log(res.data.map(el=>el.num))
            let option = {
                title: {
                    text: '近七日挂号预约情况'
                },
                tooltip:{},
                xAxis: {
                    data: res.data.map(el=>el.date)
                },
                yAxis: {},
                series: [{
                    data: res.data.map(el=>el.num),
                    type: 'bar'
                }]
            }
            orderChart.setOption(option)
        })
         this.$http.post('/home/getPayData').then(res=>{
            // console.log(res.data.map(el=>el.num))
            let option = {
                title: {
                    text: '近七日门诊充值趋势'
                },
                tooltip:{},
                xAxis: {
                    data: res.data.map(el=>el.date)
                },
                yAxis: {},
                series: [{
                    data: res.data.map(el=>el.num),
                    type: 'line',
                    smooth: true
                }]
            }
            payChart.setOption(option)
        })
        this.$http.post('/home/getCardNum').then(res=>{
            this.homeCardData = res.homeCardData
        })
        this.$http.post('/registration/msg/getAll',{
        range: 'all'
        }).then(res=>{
        // console.log(res)
        let temp = res.data.slice(0, 5)
        this.$store.commit('updateReserveTableData', temp)
        })
        this.$http.post('/home/getHotdepartment').then(res=>{
            // console.log(res)
            this.hotDepData = res.data
        })
        this.$http.post('/home/getHotdocInfo').then(res=>{
            // console.log(res)
            this.hotDocData = res.data
        })
    }
}
</script>

<style lang='less' scoped>
.home {
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
    h2 {
        color: #333;
        font-size: 20px;
        font-weight: normal;
        margin-top: 30px;
    }
    .home-main {
        padding-right: 30px;
        .home-main-top {
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
            &>div {
                flex: 1;
                margin-left: 20px;
            }
            &>div:nth-child(1) {
                margin-left: 0;
            }
            .home-numcard {
                padding: 10px;
                border-radius: 8px;
                background: #fff;
                display: flex;
                justify-content: space-around;
                align-items: center;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
                div:nth-child(1) {
                    width: 72px;
                    height: 72px;
                    border-radius: 6px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 5px;
                    img {
                        width: 27px;
                        height: 24px;
                    }
                }
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    h3 {
                        font-size: 32px;
                        color: #333;
                    }
                    p {
                        font-size: 12px;
                        color: #aaa;
                    }
                }
                &>img {
                    width: 14px;
                    height: 13px;
                    margin-top: -40px;
                    margin-left: 5px;
                }
            }
        }
        .home-main-center {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            div {
                padding: 30px;
                box-sizing: border-box;
                width: 49%;
                height: 430px;
                background: #fff;
                border-radius: 12px;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
            }
        }
        .home-main-bottom {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            div {
                border-radius: 12px;
                // height: 430px; 
            }
            .home-registration {
                width: 49%;          
                background: #fff;
                padding: 30px 0;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
                h3 {
                    margin-left: 20px;
                    margin-bottom: 20px;
                }
            }
            .home-main-bottom-right {
                width: 49%;
                display: flex;
                justify-content: space-between;
                .home-hotdepart {
                    width: 48%;
                    background: #fff;
                    margin-right: 10px;
                    padding: 30px 0;
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
                    h3 {
                        margin-left: 20px;
                        margin-bottom: 20px;
                    }
                    span {
                        display: inline-block;
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        background: #f2898e;
                        color: #fff;
                        line-height: 35px;
                        text-align: center;
                        font-size: 12px;
                    }
                }
                .home-hotdoc {
                    width: 48%;
                    background: #fff;
                    margin-left: 10px;
                    padding: 30px 0;
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
                    h3 {
                        margin-left: 20px;
                        margin-bottom: 20px;
                    }
                    span {
                        display: inline-block;
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        background: #f2898e;
                        color: #fff;
                        line-height: 35px;
                        text-align: center;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>
<template>
<div class="resdetail">
    <h1><span></span>挂号详情</h1>
    <div class="patient-message">
        <el-card class="box-card">
            <div slot="header" class="clearfix patient-card-header">
                <span>患者信息</span>
            </div>
            <div class="patient-card-main">
                <div v-for="(item, index) in patientmsgList" :key="index">
                    <span v-text="item.value"></span>
                    <span v-text="message[item.key]" v-if="item.key!='avatar'"></span>
                    <span v-else><img src="" alt=""></span>
                </div>
            </div>
        </el-card>
    </div>
    <div class="reserve-message">
        <el-card class="box-card">
            <div slot="header" class="clearfix reserve-card-header">
                <span>挂号信息</span>
            </div>
            <div class="reserve-card-main">
                <div v-for="(item, index) in reservemsgList" :key="index">
                    <span v-text="item.value"></span>
                    <span v-text="message[item.key]"></span>
                </div>
                <div class="reserve-card-main-note">
                    <span>挂号备注</span>
                    <el-input v-model="reservenote" placeholder="请输入内容"></el-input>
                </div>
                <div class="reserve-card-main-operate">
                    <el-button type="primary"
                    class="operate" @click="clickHandle('save', '/reserve')">保存</el-button>
                    <el-button type="primary" class="operate" plain @click="clickHandle('cancel', '/reserve')">取消</el-button>
                </div>
            </div>
        </el-card>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            reservenote: '',
            patientmsgList:[{
                key: 'name',
                value: '患者姓名'
            },{
                key: 'hosId',
                value: '就诊卡号'
            },{
                key: 'avatar',
                value: '患者头像'
            },{
                key: 'certificate',
                value:  '证件类型'
            },{
                key: 'id',
                value: '证件号码'
            },{
                key: 'weixinName',
                value: '微信昵称'
            },{
                key: 'phone',
                value: '手机号码'
            },{
                key: 'relationship',
                value: '关系'
            },{
                key: 'address',
                value: '就诊人地址'
            }],
            reservemsgList:[{
                key: 'hosName',
                value: '就诊医院'
            },{
                key: 'hosAdress',
                value: '医院地址'
            },{
                key: 'department',
                value: '就诊科室'
            },{
                key: 'docName',
                value: '就诊医生'
            },{
                key: 'docCall',
                value: '医生职称'
            },{
                key: 'type',
                value: '挂号类型'
            },{
                key: 'date',
                value: '门诊时间'
            },{
                key: 'time',
                value: '候诊时间'
            },{
                key: 'fare',
                value: '挂号费'
            },{
                key: 'preTime',
                value: '预约时间'
            },{
                key: 'status',
                value: '就诊状态'
            }]
        }
    },
    computed: {
        message: function(){
            let id = this.$route.params.resDetailId
            return this.$store.state.reserveTableData[this.$store.state.reserveTableData.findIndex(ele=>ele.deId==id)]
        }
    },
    methods: {
        clickHandle(type, route) {
            this.$router.push(route)
        }
    }
}
</script>

<style lang='less' scoped>
.resdetail {
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
    .patient-message {
        margin-top: 30px;
        background: #fff;
        border-radius: 12px;
        .patient-card-header {
            span {
                color: #197cfe;
            }
        }
        .patient-card-main {
            display: flex;
            flex-wrap: wrap;
            div {
                width: 33%;
                padding: 10px 0;
                font-size: 14px;
                span:nth-child(1) {
                    color: #aaa;
                    margin-right: 20px;
                }
                span:nth-child(2) {
                    color: #333;
                    img {
                        width: 14px;
                        height: 14px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    .reserve-message {
        margin-top: 20px;
        background: #fff;
        border-radius: 12px;
        .reserve-card-header {
            span {
                color: #197cfe;
            }
        }
        .reserve-card-main {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 30px;
            div {
                width: 33%;
                padding: 10px 0;
                font-size: 14px;
                span:nth-child(1) {
                    color: #aaa;
                    margin-right: 20px;
                }
                span:nth-child(2) {
                    color: #333;
                }
            }
            .reserve-card-main-note,.reserve-card-main-operate {
                width: 100%;
            }
            .reserve-card-main-operate {
                box-sizing: border-box;
                padding-left: 80px;
                .operate {
                    width: 110px;
                }
            }
        }
    }
}
</style>
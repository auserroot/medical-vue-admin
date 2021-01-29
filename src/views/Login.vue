<template>
<div id="medical-login">
    <img src="/imgs/login_pic1.svg" alt="">
    <div class="login-box">
        <h1>登录</h1>
        <h2>七尾医疗服务后台管理系统</h2>
        <form class="login-form">
            <div class="form-input">
                <span :class="{'input-color': usernameFocus}">账号</span>
                <input type="text" v-model="loginData.username" @focus="uFocusHandle(true)" @blur="uFocusHandle(false)" placeholder="请输入您的账号">
            </div>
            <div class="form-input">
                <span :class="{'input-color':passwordFocus}">密码</span>
                <input type="text" v-model="loginData.password" @focus="pFocusHandle(true)" @blur="pFocusHandle(false)" placeholder="请输入密码">
            </div>
            <p>忘记密码请联系管理员</p>
            <button @click.prevent="submitHandle">登录</button>
        </form>
    </div>
    <img src="/imgs/login_pic2.svg" alt="">
    <el-alert
        title="请输入账号或密码"
        type="warning"
        center
        show-icon
        class="login-warning"
        v-if="loginWarning">
    </el-alert>
</div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            loginData: {
                username: '',
                password: ''
            },
            usernameFocus: false,
            passwordFocus: false,
            loginWarning: false
        }
    },
    methods: {
        submitHandle() {
            let username = this.loginData.username
            let password = this.loginData.password
            if(username == '' || password== '') {
                this.loginWarning = true
            } else {
                this.$http.post('/admin/login', {
                    username,
                    password
                }).then(res=>{
                    if(res.status === 1){
                        this.$store.commit('updateStatus', res.status)
                        this.$router.push('/dashboard')
                    }
                })
            }
        },
        uFocusHandle(flag) {
            this.usernameFocus = flag
        },
        pFocusHandle(flag) {
            this.passwordFocus = flag
        }
    }
}
</script>

<style lang='less' scoped>
#medical-login {
    position: fixed;
    top: 110px;
    // margin: 0 auto;
    left: 50%;
    margin-left: -650px;
    width: 1300px;
    height: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>img {
        height: 560px;
    }
    &>img:nth-child(1) {
        margin-left: 120px;
    }
    .login-warning {
        position: fixed;
        top: 20px;
        left: 50%;
        width: 200px;
        margin-left: -100px;
        font-size: 18px;
        font-weight: bold;
    }
    .login-box {      
        min-width: 440px;
        height: 510px;
        background: rgba(0,110,255);
        border-radius: 5px;
        margin: 0 130px;
        h1 {
            font-size: 40px;
            color: #fff;
            text-align: center;
            margin-top: 40px;
        }
        h2 {
            font-size: 17px;
            font-weight: normal;
            color: #fff;
            text-align: center;
            margin-top: 10px;
            margin-bottom: 50px;
        }
        .login-form {
            width: 360px;
            margin: 0 auto;
            font-size: 14px;
            .form-input {
                width: 100%;
                height: 48px;
                background: #fff;
                margin-top: 20px;
                border-radius: 3px;
                display: flex;
                align-items: center;
                span {
                    display: inline-block;
                    margin: 0 20px;
                }
                .input-color {
                    color: rgb(0,110,255);
                }
                input {
                    width: 281px;
                    height: 41px;
                    outline: none;
                    border: none;
                }
            }
            p {
                color: #fff;
                float: right;
                margin-top: 14px;
            }
            button {
                width: 100%;
                height: 48px;
                background: rgba(255,145,56);
                border: none;
                outline: none;
                border-radius: 3px;
                margin-top: 50px;
                color: #fff;
                font-size: 18px;
                cursor: pointer;
                &:hover {
                    background: rgba(229,141,76);
                }
                &:active {
                    background: rgba(216,133,72);
                }
            }
        }
    }
}
</style>
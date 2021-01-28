import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
// import store from '../store/index.js'

const includPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return includPush.call(this, location).catch(err => err)

}

Vue.use(VueRouter)

const routes = [
  //登录页
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  // 主页
  {
    path: '/index',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Index.vue'),
    children:[
       // 预约
  {
    path:'/reserve',
    name:'Reserve',
    component:()=>import('../components/Reserve.vue')
  },
  // 费用
  {
    path:'/cost',
    name:'Cost',
    component:()=>import('../components/Cost.vue')
  },
  // 医院信息
  {
    path:'/hospitalinfo',
    name:'Hospitalinfo',
    component:()=>import('../components/Hospitalinfo.vue'),
    
  },
  
  // 系统设置
  {
    path:'/systemseting',
    name:'Systemseting',
    component:()=>import('../components/Systemseting.vue')
  },
  //医生排班
  {
    path:'/scheduling',
    name:'Scheduling',
    component:()=>import('../components/Scheduling.vue')
  },
  {
    path:'/pay',
    name:'Pay',
    component:()=>import('../components/Pay.vue')
  },
  {
    path:'/refund',
    name:'Refund',
    component:()=>import('../components/Refund.vue')
  },
  {
    path:'/doctor',
    name:'Doctor',
    component:()=>import('../components/Doctor.vue'), 
  },
  {
    path:'/addDoctorinfo',
    name:'AddDoctorinfo',
    component:()=>import('../components/AddDoctorinfo.vue')
  },
  {
    path:'/departments',
    name:'Departments',
    component:()=>import('../components/Departments.vue'),
  },
  {
    path:'/addDepartmentsinfo',
    name:'AddDepartmentsinfo',
    component:()=>import('../components/AddDepartmentsinfo.vue')
  },
  {
    path:'/encyclopedia',
    name:'Encyclopedia',
    component:()=>import('../components/Encyclopedia.vue')
  },
  {
    path:'/addEncyclopediainfo',
    name:'AddEncyclopediainfo',
    component:()=>import('../components/AddEncyclopediainfo.vue')
  },
  {
    path:'/map',
    name:'Map',
    component:()=>import('../components/Map.vue')
  },
  {
    path:'/booking',
    name:'Booking',
    component:()=>import('../components/Booking.vue')
  },
  {
    path:'/administrator',
    name:'Administrator',
    component:()=>import('../components/Administrator.vue')
  },
  {
    path:'/management',
    name:'Management',
    component:()=>import('../components/Management.vue')
  },
  {
    path:'/post',
    name:'Post',
    component:()=>import('../components/Post.vue')
  }, 
  {
    path:'/message',
    name:'Message',
    component:()=>import('../components/Message.vue')
  }, 
  {
    path:'/addsite',
    name:'Addsite',
    component:()=>import('../components/Addsite.vue')
  },
  {
    path:'/creating',
    name:'Creating',
    component:()=>import('../components/Creating.vue')
  },
    ]
  },
 
]

//全局守卫
// router.beforeEach((to,from,next)=>{
//   // console.log(from)
//   // console.log(store)
//   // console.log(to)
//   if (store.state.status === 1||to.path === '/index') {
//     next()
//   } else {
//     next("/index")
//   }
// })

const router = new VueRouter({
  routes
})

export default router

import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://rap2api.taobao.org/app/mock/276507',
});

// 添加响应的拦截器
instance.interceptors.response.use(function (response) {
    // response 响应的所有内容
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
  
export default instance;
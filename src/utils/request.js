import axios from 'axios'

//第一步 创建实例
const service = axios.create({
    baseURL: process.env.REACT_APP_API ,//根据开发环境来替换不同的路径
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });
//第二步 请求拦截
service.interceptors.request.use(function(config){
    //在发送请求之前做什么？
    console.log('111')
    return config;
},function(err){
    //对请求错误做什么？
    console.log('222')
    return Promise.reject(err);
})
//第三步 响应拦截
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('333')
    return response;
  }, function (error) {
    // 对响应错误做点什么
    console.log('444')
    return Promise.reject(error);
  });

  export default service;
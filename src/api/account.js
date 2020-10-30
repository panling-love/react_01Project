import service from '../utils/request'

/**
 * 登录接口
 */

 export function Login(data){
    service.request({
        url:'/login/',
        method:'post',
        data,//请求方式为post时
        //params:data//请求方式为get时
    })
 }
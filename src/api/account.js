import service from '../utils/request'

/**
 * 登录接口
 */

 export function Login(data){
    return service.request({
        url:'/login/',
        method:'post',
        data,//请求方式为post时
        //params:data//请求方式为get时
    })
 }

 /**
 * 注册接口
 */

export function Register(data){
    return service.request({
        url:'/register/',
        method:'post',
        data,//请求方式为post时
        //params:data//请求方式为get时
    })
 }

 /**
 * 请求验证码接口
 */

export function GetCode(data){
    return service.request({
        url:'/getSms/',
        method:'post',
        data,//请求方式为post时
        //params:data//请求方式为get时
    })
 }
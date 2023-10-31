// 这是 axios的二次封装类
import axios from 'axios';

/* 1. 基础错误响应信息常量 */
// const NETWORK_ERROR = '网络请求异常,请稍后重试......'/* 网络错误 */

/* 2. 创建axios实例对象 http */
const http = axios.create({
  // 访问路径通用前缀
  baseURL: 'http://192.168.2.190:8080/',
  // 请求超时时间 单位毫秒
  timeout: 3000,
})

// 请求拦截器 
http.interceptors.request.use(function (config) {
  // 请求前逻辑,例如:自定义header,jwt-token令牌的认证
  return config;
},
  function (error) {
    // 请求错误逻辑
    return Promise.reject(error);
  });

// 响应拦截器
http.interceptors.response.use((response) => {
  // 对响后逻辑
  /* 1. 解构 code:响应码 msg:响应信息 data:响应主体  */
  // const { code, data, msg } = response.data
  // console.log('响应对象', response)
  // console.log('响应码', code)
  // console.log('响应信息', msg)
  // console.log('响应主体', data)
  // // 2. 响应码 1,成功返回数据 
  // if (code === 1) {
  //   return data
  // }
  // 3. 响应码非200,单独判断 
  // else {
  //   // 例如:网络请求错误
  //   console.error(msg || NETWORK_ERROR)
  //   return Promise.reject(msg || NETWORK_ERROR)
  // }

  // 返回响应对象
  return response
},
  function (error) {
    // 响应错误逻辑
    return Promise.reject(error);
  });

export default http


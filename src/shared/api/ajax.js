import Qs from 'qs';
import axios from 'axios';
import Utils from '../utils';

const responseStatus = {
    SUCCESS: '100',
    NET_ERR: '101',	// 网络连接异常，请稍候再试
    BIZ_ERR: '103', // 业务请求异常
    NO_AUTH: '104',
}

/**
 * 不处理请求的同/异步问题，用es7 async..await解决
 * **/
export default function Ajax({
  url = '/',
	method = 'post',
	data = {},
  loading = true,
  loadingContainer,
	toastContainer,
	mode = '',
	params = {},
	from = '',
	headers = { 'Content-Type': 'application/json;charset=UTF-8' },
  delayTime = 5000,
  netErrToast = true,//默认全局统一配置提示(网关异常)
  bizErrToast = true,//默认全局统一配置提示(业务异常)
}) {
  return new Promise( (resolve, reject) => {
    const instance = axios.create({
      baseURL: process.env.BASE_API,
      timeout: delayTime,
      headers: Object.assign(
        {
          'transcode': commonBizHeader(),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        headers),
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }]
    })

    // 请求拦截
    instance.interceptors.request.use(function (response) {
      //loading
      return response;
    }, function (error) {
      console.log('error 请求拦截 : ', error)
      return Promise.reject(error);
    });

    //请求数据响应
    instance({url, method, data})
      .then( (response) => {
        const res = response.data;
        if(status.SUCCESS != res.errorCode) {
          switch (res.errorCode) {
            case status.NET_ERR:
              if(netErrToast) {

              }
              break;
            case status.BIZ_ERR:
              if(bizErrToast) {

              }
              break;
            case status.NO_AUTH://提示并直接跳转登录页
              
              break;
            default:
              break;
          }
        }
        resolve(res);
      }).catch( (error) => {
        console.log('error', error);
        reject(error);
      })

  })
}

const commonBizHeader = () => {
    let params = {}
    params['ua'] = window.navigator.userAgent.toLowerCase()
    params['cv'] = '20170614'
    params['ws'] = window.screen.height + '*' + window.screen.width
    params['token'] = "3dwo0onUUsPKVJcP8tk"
    params['os'] = window.navigator.appCodeName
  
    if(Utils.getItem('userToken')) {
      params['token'] = Utils.getItem('userToken')
    }
  
    params['app'] = 'kind'
  
    let UUID = Utils.getItem('pkey')
    if (!UUID) {
      UUID = getUUID()
      Utils.setItem('pkey', UUID)
    }
    return encodeURIComponent(JSON.stringify(params))
}

/**
 * 获取32位UUID
 * @returns {string}
 */
const getUUID = () => {
    let len = 32 // 32长度
    let radix = 16 // 16进制
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    let uuid = []
    let i
    radix = radix || chars.length
    if (len) {
      for (i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * radix]
      }
    } else {
      var r
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
        }
      }
    }
  
    return uuid.join('').toLowerCase()
}


































import 'whatwg-fetch';

// import Qs from 'qs'
const baseUrl = '/api';

const status = {
    SUCCESS: '100',
    NET_ERR: '101',	// 网络连接异常，请稍候再试
    BIZ_ERR: '103', // 业务请求异常
    NO_AUTH: '104'
}

export function ajax(url, options = {}) {
    options.credentials = 'include';
    options.headers = {
        'Accept': 'application/json, text/plain, */*',
        "tracecode": commonBizHeader(),
    };
    if(options.method.toLowerCase() == 'post' || type.toLowerCase() == 'put') {
        options.body = JSON.stringify(options.body);
        options.headers = {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8',
            "tracecode": commonBizHeader(),
        };
        url = `${baseUrl}${url}`
    }

    return new Promise( (resolve, reject) => {
        fetch(url, options).then( (res) => {
            return res.json();
        }).then( res => {
            const res = data;
            if(res.errorCode != status.SUCCESS) {
                switch (res.errorCode) {
                    case status.NET_ERR:
                    case status.BIZ_ERR:
                        NToast({description: '网络连接异常，请稍后再试'},'warning');
                        reject(res);
                        break;
                    case status.NO_AUTH:
                        NToast({description: '网络连接异常，请稍后再试'},'warning');
                        Utils.removeStorage('userToken');
                        // 重新跳转至登录页 todo
                        reject(res);
                        break;
                    default:
                        break;
                }
            }
            resolve(data);
        }).catch( err => {
            console.log('err', err);
            reject(err);
        }) 
    })
}

function commonBizHeader () {
    let params = {}
    params['ua'] = window.navigator.userAgent.toLowerCase()
    params['cv'] = '20170614'
    params['ws'] = window.screen.height + '*' + window.screen.width
    params['token'] = "3dwo0onUUsPKVJcP8tk"
    params['os'] = window.navigator.appCodeName
    params['token'] = Utils.getStorage('userToken')
  
    params['app'] = 'kind'
  
    let UUID = Utils.getStorage('pkey')
    if (!UUID) {
      UUID = getUUID()
      Utils.setStorage('pkey', UUID)
    }
    return encodeURIComponent(JSON.stringify(params))
}

/**
 * 获取UUID
 * @returns {string}
 */
export function getUUID() {
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












import Ajax from 'shared/api/ajax';
const callLoginByUserAndName = (model = {}) => {
    return Ajax({
        url: '/auth/login',
        method: 'post',
        data: {
            username: model.username,
            password: model.password
        }
    })
}

const callLogout = () => {
    return Ajax({
        url: '/auth/logout',
        method: 'post',
        data: {}
    })
}

const getUserInfo = () => {
    return Ajax({
      url: '/user/info',
      method: 'get',
      data: {}
    })
}

const getAccessMemu = () => {
    return Ajax({
      url: '/menu/getaccessmenu',
      method: 'get'
    })
  }

export{
    callLoginByUserAndName,
    callLogout,
    getUserInfo,
    getAccessMemu
}



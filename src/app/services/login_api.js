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

export{
    callLoginByUserAndName
}



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

export{
    callLoginByUserAndName
}



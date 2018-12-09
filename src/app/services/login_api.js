import {ajax} from './index';
const callLoginByUserAndName = (model = {}) => {
    return ajax({
        url: '/login',
        method: 'post',
        data: {
            ...model
        }
    })
}

export{
    callLoginByUserAndName
}



import {ajax} from './index';
const callLogin = (model = {}) => {
    return ajax('/login', {
        method: 'post',
        data: {
            ...model
        }
    })
}



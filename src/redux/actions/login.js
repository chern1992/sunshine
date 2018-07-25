import {loginMd} from '../constants/index';

export function update(data) {
    return {
        type: loginMd.USER_UPDATE,
        data: data
    }
}












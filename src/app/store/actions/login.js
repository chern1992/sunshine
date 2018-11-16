import {loginTypes} from '../types';

export function update(data) {
    return {
        type: loginTypes.PLAN_UPDATE,
        data:data
    }
}







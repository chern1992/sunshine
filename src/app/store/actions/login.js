import {loginTypes} from '../types';

export const update = (data) => {
    return {
        type: loginTypes.PLAN_UPDATE,
        data:data
    }
}







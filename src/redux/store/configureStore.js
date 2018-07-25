import {createStore} from 'redux';
import {rootReducer} from '../reducer';
export const configureStore = function(initialState) {
    // 首先创建redux数据
    const store = createStore(rootReducer, initialState);
    return store;
}
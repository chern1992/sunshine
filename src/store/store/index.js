import { createStore } from 'redux'  //创建redux数据函数
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  //首先创建redux数据
    const store = createStore(rootReducer, initialState)
    return store
}
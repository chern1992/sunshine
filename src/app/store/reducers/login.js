import loginTypes from '../types';

const initialState = []

export default function userinfo (state = initialState, action) {
  switch (action.type) {
      case loginTypes.PLAN_UPDATE:
        return action.data
      case loginTypes.PLAN_ADD:
        state.unshift(action.data)
        return state
      case loginTypes.PLAN_REMOVE:
        return state.filter((item)=>{
          if (item.id!==action.data.id){
            return item
          }
        })
      default:
        return state
  }
}


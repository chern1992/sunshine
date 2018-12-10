import layoutTypes from '../types';

const initialState = []

export default function(state, action) {
  if (!state) {
    state = {
        spinLoading: false,
        toPath: '/',
        currentModule: '',//当前模块
        accessMenu: [],//可访问的菜单,
        openAccessMenu: [],//展开的可访问的菜单(子级包含父级name)
        moduleList: [],//模块列表
        moduleMenu: [],//模块菜单
    }
  }
  switch (action.type) {
    case SPIN_LOADING:
      break;
    case UPDATE_MODULE:
      return {
        ...state,
        currentModule: action.currentModule,
        moduleMenu: action.moduleMenu
      }
    default:
      return state
  }
}

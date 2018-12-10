import {layoutTypes} from '../types';
export const updateModule = (module) => {
  return { 
    type: layoutTypes.UPDATE_MODULE,
    ...module
  }
}
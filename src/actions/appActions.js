import types from '../constants/ActionType';

const
  initialize = () => {
     return {
       type : types.APP_INITIALIZE
     }
  };

export {
  initialize
}
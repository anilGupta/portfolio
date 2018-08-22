import types from '../constants/ActionType';

const initialState = {
  height: 0,
  width: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WINDOW_RESIZE:
      return {
        ...state,
        height: action.height,
        width: action.width,
      };

    default:
      return state;
  }
};

export default appReducer;

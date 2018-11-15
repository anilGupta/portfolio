import types from '../constants/ActionType';

const initialState = {
  height: 0,
  width: 0,
  model: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WINDOW_RESIZE:
      return {
        ...state,
        height: action.height,
        width: action.width,
      };

    case types.TOGGLE_MODEL:
    default:
      return {
        ...state,
        model: action.toggle
      };
  }
};

export default appReducer;

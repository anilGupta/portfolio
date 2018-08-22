import types from '../constants/ActionType';
import helper from '../utils/helper';

const windowResize = (height, width) => ({
    type: types.WINDOW_RESIZE,
    height,
    width,
  }),
  initialize = () => (dispatch) => {

    dispatch(windowResize(...helper.getViewPort()));
    window.onresize = () => {
        dispatch(windowResize(window.innerHeight, window.innerWidth));
    };
};

export {
  initialize
}
import types from '../constants/ActionType';
import helper from '../utils/helper';

const windowResize = (height, width) => ({
    type: types.WINDOW_RESIZE,
    height,
    width,
  }),
  togglePhotoGallery = (toggle) => {
    return {
      type: types.TOGGLE_MODEL,
      toggle
    }
  },
  initialize = () => (dispatch) => {
       dispatch(windowResize(...helper.getViewPort()));
       window.onresize = () => {
          dispatch(windowResize(window.innerHeight, window.innerWidth));
       }
  };

export {
  initialize,
  togglePhotoGallery
}
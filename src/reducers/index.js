import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './uiReducer';
import app from './appReducer';


export default combineReducers({
  app,
  ui,
  routing: routerReducer
});
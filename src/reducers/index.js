import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './uiReducer';
import app from './appReducer';
import user from './userReducer';
import work from './workReducer';


export default combineReducers({
  app,
  ui,
  user,
  work,
  routing: routerReducer
});
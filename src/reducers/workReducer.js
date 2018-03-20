import types from '../constants/ActionType';

const initialState = {
         projects: [],
         projectsLoading: false
      },
      workReducer = (state = initialState, action) =>{
          switch(action.type){
            case types.REQUEST_PROJECT:
              return Object.assign({}, state, { projectsLoading: true});

            case types.RECEIVE_BRAND:
              return Object.assign({}, state, {
                projects: action.projects,
                projectsLoading: false
              });

            default:
              return state;
          }
      };

export default workReducer;

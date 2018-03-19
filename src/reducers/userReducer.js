import types from '../constants/ActionType';

const initialState = {
         brands: [],
         skills: [],
         brandsLoading: false,
         skillsLoading: false,
      },
      userReducer = (state = initialState, action) =>{
          switch(action.type){
            case types.REQUEST_BRAND:
              return Object.assign({}, state, { brandsLoading: true});

            case types.RECEIVE_BRAND:
              return Object.assign({}, state, {
                brands: action.brands,
                brandsLoading: false
              });

            case types.REQUEST_SKILLS:
              return Object.assign({}, state, { skillsLoading: true});

            case types.RECEIVE_SKILLS:
              return Object.assign({}, state, {
                skills: action.skills,
                skillsLoading: false
              });

            default:
              return state;
          }
      };

export default userReducer;

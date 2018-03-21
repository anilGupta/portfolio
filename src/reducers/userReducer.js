import types from '../constants/ActionType';

const initialState = {
         brands: [],
         skills: [],
         tags: [],
         brandsLoading: false,
         skillsLoading: false,
         tagsLoading: false
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

            case types.REQUEST_TAGS:
              return Object.assign({}, state, { tagsLoading: true});

            case types.RECEIVE_TAGS:
              return Object.assign({}, state, {
                tags: action.tags,
                tagsLoading: false
              });

            default:
              return state;
          }
      };

export default userReducer;

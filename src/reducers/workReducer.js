import types from '../constants/ActionType';

const initialState = {
         allProjects: [],
         projects: [],
         projectsLoading: false,
         filterTags: [],
         showFilterTags: false
      },
      workReducer = (state = initialState, action) =>{
          switch(action.type){
            case types.REQUEST_PROJECT:
              return Object.assign({}, state, { projectsLoading: true});

            case types.RECEIVE_PROJECT:
              return Object.assign({}, state, {
                allProjects: action.projects,
                projects: action.projects,
                projectsLoading: false
              });

            case types.FILTER_PROJECT:

              const tags = action.operation == 'ADD' ? [...state.filterTags, action.tag ]:  state.filterTags.filter(item => item.code != action.tag.code);
                    console.log(state.projects);

              return Object.assign({}, state, {
                filterTags: tags
              });

            case types.TOGGLE_FILTER:
              return Object.assign({}, state, { showFilterTags: !state.showFilterTags });

            default:
              return state;
          }
      };

export default workReducer;

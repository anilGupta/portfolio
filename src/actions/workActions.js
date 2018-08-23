import Config from '../constants/Config';
import types from '../constants/ActionType';
import Network from '../utils/network';

const
  fetchProjects =() => {
    return dispatch => {
      dispatch(requestProject());
      const url = `${Config.apiURL}/Projects?filter[include]=tags&filter[include]=brand`;
      return Network.get(url).then(result => {
        return dispatch(receiveProject(result));
      })
    }
  },
  requestProject = () => {
    return {
      type: types.REQUEST_PROJECT
    }
  },
  receiveProject = projects => {
    return {
      type: types.RECEIVE_PROJECT,
      projects
    }
  },
  fetchProjectIfNeeded = () => {
    return (dispatch, getState) => {
      const { work : { projects }} = getState();
      return !projects && projects.length ? projects.resolve(projects) : dispatch(fetchProjects());
    }
  },
  filterProject = (tag, operation) => {
    return dispatch => {
      dispatch({
        type: types.FILTER_PROJECT,
        tag,
        operation
      })
      return Promise.resolve(true)
    }

  },
  toggleFilter = () => {
    return {
      type: types.TOGGLE_FILTER
    }
  }

export {
  fetchProjectIfNeeded,
  filterProject,
  toggleFilter
}
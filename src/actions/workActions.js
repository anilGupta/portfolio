import Config from '../constants/Config';
import types from '../constants/ActionType';
import Network from '../utils/network';

const
  fetchProjects =() => {
    return dispatch => {
      dispatch(requestProject());
      const url = `${Config.apiURL}/Projects`;
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
      return projects.length ? projects.resolve(projects) : dispatch(fetchProjects());
    }
  };

export {
  fetchProjectIfNeeded
}
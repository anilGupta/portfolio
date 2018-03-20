import Config from '../constants/Config';
import types from '../constants/ActionType';
import Network from '../utils/network';

const
  fetchBrand =() => {
    return dispatch => {
      dispatch(requestBrand());
      const url = `${Config.apiURL}/Brands`;
      return Network.get(url).then(result => {
        return dispatch(receiveBrand(result));
      })
    }
  },
  fetchSkills =() => {
    return dispatch => {
      dispatch(requestSkill());
      const url = `${Config.apiURL}/Skills`;
      return Network.get(url).then(result => {
        return dispatch(receiveSkills(result));
      })
    }
  },
  requestBrand = () => {
    return {
      type: types.REQUEST_BRAND
    }
  },
  receiveBrand = brands => {
    return {
      type: types.RECEIVE_BRAND,
      brands
    }
  },
  requestSkill = () => {
    return {
      type: types.REQUEST_SKILLS
    }
  },
  receiveSkills = skills => {
    return {
      type: types.RECEIVE_SKILLS,
      skills
    }
  },
  fetchBrandIfNeeded = () =>{
    return (dispatch, getState) => {
      const { user: { brands}} = getState();
      return brands.length ? Promise.resolve(brands) : dispatch(fetchBrand());
    }
  },
  fetchSkillIfNeed = () => {
    return (dispatch, getState) => {
      const { user: { skills }} = getState();
      return skills.length ? Promise.resolve(skills) : dispatch(fetchSkills());
    }
  };

export {
  fetchBrandIfNeeded,
  fetchSkillIfNeed
}
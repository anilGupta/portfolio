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
  fetchTags =() => {
    return dispatch => {
      dispatch(requestTags());
      const url = `${Config.apiURL}/Tags`;
      return Network.get(url).then(data => {
        const tags = data.reduce((result, next)=> {
          const group = next.group;
                result[next.group] ? result[group].push(next): result[group] = [next]
                return result;
        }, {});
        return dispatch(receiveTags(tags));
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
  requestTags = () => {
    return {
      type: types.REQUEST_TAGS
    }
  },
  receiveTags = tags => {
    return {
      type: types.RECEIVE_TAGS,
      tags
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
  },
  fetchTagsIfNeeded = () => {
    return (dispatch, getState) => {
      const { user: { tags }} = getState();
      return tags.length ? Promise.resolve(tags) : dispatch(fetchTags());
    }
  };

export {
  fetchBrandIfNeeded,
  fetchSkillIfNeed,
  fetchTagsIfNeeded
}
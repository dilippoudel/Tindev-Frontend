import {
  CREATE_SKILL_REQUEST,
  CREATE_SKILL_SUCCESS,
  CREATE_SKILL_FAIL,
  ADD_SKILL,
  REMOVE_SKILL,
  SkillActions,
} from '../types'

const skill = (
  state: any = {
    inProfile: [],
    loading: false,
    error: null,
  },
  action: SkillActions
) => {
  switch (action.type) {
    case CREATE_SKILL_REQUEST: {
      return {
        ...state,
        loading: true,
        skillInfo: action.payload,
      }
    }
    case CREATE_SKILL_SUCCESS: {
      return {
        ...state,
        loading: false,
        skillInfo: action.payload,
      }
    }
    case CREATE_SKILL_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }
    case ADD_SKILL: {
      const id = action.payload.id
      console.log('idInReducer', id)
      if (state.inProfile.find((s: any) => s.id === id)) {
        return state
      }
      return {
        ...state,
        inProfile: [...state.inProfile, id],
      }
    }
    case REMOVE_SKILL: {
      const skill = action.payload
      const skillIndex = state.inProfile.findIndex((s: any) => s.id === skill)
      const profileCopy = [...state.inProfile]
      if (skillIndex !== -1) {
        profileCopy.splice(skillIndex, 1)
        return {
          inProfile: profileCopy,
        }
      }
      return state
    }
    default:
      return state
  }
}

export default skill

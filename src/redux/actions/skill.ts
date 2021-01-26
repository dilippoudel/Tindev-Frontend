import {
  CREATE_SKILL_REQUEST,
  CREATE_SKILL_SUCCESS,
  CREATE_SKILL_FAIL,
  ADD_SKILL,
  REMOVE_SKILL,
  Skill,
  CreateSkillSuccessAction,
} from '../types'

export const createSkillRequest = (name: Skill) => {
  return {
    type: CREATE_SKILL_REQUEST,
    payload: name,
  }
}

export const createSkillSuccess = (skillInfo: CreateSkillSuccessAction) => {
  return {
    type: CREATE_SKILL_SUCCESS,
    payload: skillInfo,
  }
}

export const createSkillFail = (error: string) => {
  return {
    type: CREATE_SKILL_FAIL,
    payload: error,
  }
}

export const addSkill = ({ id }: any) => {
  return {
    type: ADD_SKILL,
    payload: {
      id,
    },
  }
}

export const removeSkill = ({ id }: any = {}) => {
  return {
    type: REMOVE_SKILL,
    payload: id,
  }
}

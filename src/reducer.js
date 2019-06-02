import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants'

const initialState = {
  searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      }
    default:
      return state;
  }
}

const initialStateRobots = {
  isLoading: false,
  robots: [],
  error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        robots: action.payload
      }
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
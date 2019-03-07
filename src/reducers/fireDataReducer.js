import { FETCH_FIRE_DATA_ACTION, LOADING } from '../constants/fireConstants';

const initialState = {
  loading: true,
  result: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
     case FETCH_FIRE_DATA_ACTION:
      return {
        ...state,
       result: action.fireData
      }
      case LOADING:
        return {
          ...state,
          loading: action.loading
        }
     default:
      return state
    }
   }
import { ADD_COUNT, UPDATE_TYPE } from "../action/dropAction"
import { GET_FEED_SUCCESS } from "../action/listIgredientsAction";
const initialState = {
  id: '',
  feed: [],
  
};

export const dropReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_TYPE: {
      
      return {
        ...state,
        feed: [...state.feed, action.props.card],
        
        // feed: state.filter(item => )
      }
    }
    case ADD_COUNT: {
      
      return {
        ...state,
        count: {...state.count + action.count}
        // feed: state.filter(item => )
      }
    }
    default: {

      return state
    }

  }

}
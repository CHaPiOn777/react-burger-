import { ADD_COUNT, DELETE_ITEM, UPDATE_TYPE } from "../action/dropAction"
import { GET_FEED_SUCCESS } from "../action/listIgredientsAction";
const initialState = {
  feed: [],
  bun: []
};

export const dropReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TYPE: {
      return {
        ...state,
        feed: [...state.feed, action.data]
      }
    }

    case DELETE_ITEM: {
      return {
        ...state,
        feed:
          [...state.feed].filter(item => {
            return item.id !== action.id
          })
      }
    }
    
    default: {
      return state
    }
  }
}
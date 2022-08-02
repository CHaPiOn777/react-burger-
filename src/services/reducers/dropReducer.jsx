import { ADD_COUNT, DELETE_ITEM, ADD_INGREDIENTS } from "../action/dropAction"
import { GET_FEED_SUCCESS } from "../action/listIgredientsAction";
const initialState = {
  feed: [],
  bun: []
};

export const dropReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENTS: {
      return {
        ...state,
        bun: action.data.card.type === 'bun' ? action.data : {...state.bun},
        feed: action.data.card.type !== 'bun' ? [...state.feed, action.data] : [...state.feed]
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
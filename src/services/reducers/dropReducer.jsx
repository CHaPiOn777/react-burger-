import { ADD_COUNT, DELETE_ITEM, ADD_INGREDIENT, CHANGE_ITEM } from "../action/dropAction"
import { GET_FEED_SUCCESS } from "../action/listIgredientsAction";
const initialState = {
  feed: [],
  bun: []
};

export const dropReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        bun: action.data.card.type === 'bun' ? [action.data] : [...state.bun],
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

    case CHANGE_ITEM: {
      const constructorItems = [...state.feed];
      constructorItems.splice(action.data.dragIndex, 0, constructorItems.splice(action.data.dropIndex, 1)[0])

      return {
        ...state,
        feed: constructorItems
      }
    }

    default: {
      return state
    }
  }
}
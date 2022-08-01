import { ADD_COUNT, DELETE_ITEM, UPDATE_TYPE } from "../action/dropAction"
import { GET_FEED_SUCCESS } from "../action/listIgredientsAction";
const initialState = {
  feed: [],

};

export const dropReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TYPE: {


      return {
        ...state,
        feed: [...state.feed, action.data],

        // feed: state.filter(item => )
      }
    }
    case DELETE_ITEM: {
      return {
        ...state,
        feed: 
          [...state.feed].filter(item => {
            return item.id !== action.id
          }
          )
        
        // feed: state.filter(item => )
      }
    }
    default: {

      return state
    }

  }

}
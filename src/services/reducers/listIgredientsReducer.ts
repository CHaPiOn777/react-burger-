import { TIngredient, TIngredientConstructor } from './../types/types';
import { GET_FEED, GET_FEED_FAILED, GET_FEED_SUCCESS, TBurgerIngredients } from "../action/listIgredientsAction";

export type TInitialState = {
	feedRequest: boolean;
  feedFailed: boolean;
	feed: TIngredient[];
}

const initialState: TInitialState = {
  feedRequest: true,
  feedFailed: false,
  feed: [],
};


export const listIgredientsReducer = (state = initialState,  action: TBurgerIngredients): TInitialState => {
  switch (action.type) {
    case GET_FEED: {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false
      }
    }
    case GET_FEED_SUCCESS: {
      return {
        ...state,
        feed: action.feed,
        feedRequest: false
      }
    }
    case GET_FEED_FAILED: {
      return {
        ...state,
        feedFailed: true,
        feedRequest: false
      }
    }
    default: {
      return state
    }
  }
}
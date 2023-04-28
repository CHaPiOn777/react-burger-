import { TIngredient, TIngredientConstructor } from './../types/types';
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_ITEM: 'DELETE_ITEM' = 'DELETE_ITEM';
export const CHANGE_ITEM: 'CHANGE_ITEM' = 'CHANGE_ITEM';
export const RESET_ITEMS: 'RESET_ITEMS' = 'RESET_ITEMS';


export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  data: TIngredientConstructor;
  ingredients: TIngredientConstructor;
  feed: TIngredientConstructor;
  bun: TIngredientConstructor;
}
export interface IDeleteItem {
  readonly type: typeof DELETE_ITEM;
  feed: TIngredientConstructor;
  id: string
}

export interface IResetItem {
  readonly type: typeof RESET_ITEMS;
  ingredients: TIngredientConstructor;
  feed: TIngredientConstructor;
  bun: TIngredientConstructor;
}
export interface IChangeItem {
  readonly type: typeof CHANGE_ITEM;
  data: {
    dragIndex: number;
    dropIndex: number;
  }
}

export type TBurgerConstructorActions =
  | IAddIngredient
  | IDeleteItem
  | IChangeItem
  | IResetItem;
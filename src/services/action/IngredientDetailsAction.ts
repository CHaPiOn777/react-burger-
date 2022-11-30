import { TIngredientsInfo } from "../types/types";
import { TLoader } from "./actionCreator";
export const POPUP_ITEM: 'POPUP_ITEM' = 'POPUP_ITEM';

export interface IItemInfo {
  readonly type: typeof POPUP_ITEM;
  item: TIngredientsInfo;
  priceOrder: string | number ;
}

export type TOrderInfo = 
  | IItemInfo
  | TLoader;
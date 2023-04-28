export const POPUP_ITEM_INFO: 'POPUP_ITEM_INFO' = 'POPUP_ITEM_INFO';
export const POPUP_ORDER_ITEM_INFO: 'POPUP_ORDER_ITEM_INFO' = 'POPUP_ORDER_ITEM_INFO';
export const POPUP_ORDER: 'POPUP_ORDER' = 'POPUP_ORDER';
export const POPUP_CLOSE: 'POPUP_CLOSE' = 'POPUP_CLOSE';

interface IPopupItemInfo {
  readonly type: typeof POPUP_ITEM_INFO;
}

interface IPopuoOrder {
  readonly type: typeof POPUP_ORDER;
}

interface IPopupOrderInfo {
  readonly type: typeof POPUP_ORDER_ITEM_INFO;
}
interface IPopupClose {
  readonly type: typeof POPUP_CLOSE;
}

export type TPopup = 
  | IPopupItemInfo
  | IPopuoOrder
  | IPopupOrderInfo
  | IPopupClose;
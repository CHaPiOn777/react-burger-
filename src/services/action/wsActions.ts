import { AppThunk } from "../types";
import { TFeedResponce } from "../types/types";

export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_SEND_ORDER = 'WS_SEND_ORDER';
export const WS_GET_ORDER = 'WS_GET_ORDER';
export const WS_GET_ORDER_AUTH = 'WS_GET_ORDER_AUTH';
export const WS_CONNECTION_START_AUTH = 'WS_CONNECTION_START_AUTH';
export const WS_CONNECTION_CLOSED_AUTH = 'WS_CONNECTION_CLOSED_AUTH';

interface IWsConnectionStart {
	readonly type: typeof WS_CONNECTION_START;
}
interface IWsConnectionSuccess {
	readonly type: typeof WS_CONNECTION_SUCCESS;
}
interface IWsConnectionError {
	readonly type: typeof WS_CONNECTION_ERROR;
}
interface IWsConnectionClosed {
	readonly type: typeof WS_CONNECTION_CLOSED;
}
interface IWsConnectionClosedAuth {
	readonly type: typeof WS_CONNECTION_CLOSED_AUTH;
}
interface IWsGetMessage {
	readonly type: typeof WS_GET_ORDER;
	payload: TFeedResponce
}
interface IWsSendMessage {
	readonly type: typeof WS_SEND_ORDER;
	payload: TFeedResponce
}
interface IWsGetOrderAuth {
	readonly type: typeof WS_GET_ORDER_AUTH;
	payload: TFeedResponce
}



export const wsConnectionSuccess = (): IWsConnectionSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS
  };
};

export const wsConnectionError = (): IWsConnectionError => {
  return {
    type: WS_CONNECTION_ERROR
  };
};

export const wsConnectionClosed = (): IWsConnectionClosed => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};
export const wsConnectionClosedAuth = (): IWsConnectionClosedAuth => {
  return {
    type: WS_CONNECTION_CLOSED_AUTH
  };
};

export const wsGetOrder = (order: TFeedResponce):IWsGetMessage => {
  return {
    type: WS_GET_ORDER,
    payload: order
  };
};

export const wsSendOrder =  (order: TFeedResponce): IWsSendMessage => {
  return {
    type: WS_SEND_ORDER,
    payload: order
  };
};
export const wsGetOrderMy =  (order: TFeedResponce): IWsGetOrderAuth => {
  return {
    type: WS_GET_ORDER_AUTH,
    payload: order
  };
};

export type TWsActions =
	| IWsConnectionStart
	| IWsConnectionSuccess
	| IWsConnectionError
	| IWsConnectionClosed
	| IWsGetMessage
	| IWsGetOrderAuth
	| IWsConnectionClosedAuth
	| IWsSendMessage;


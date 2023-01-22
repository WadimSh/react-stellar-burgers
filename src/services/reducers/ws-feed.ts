import { TActions } from '../actions';
import { TOrder } from '../../types/types';

import {
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_GET_MESSAGE,
} from '../constants';

type TInitialState = {
  wsConnected: boolean;
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
};

const initialState: TInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const wsFeedReducer = (state = initialState, action: TActions) => {
  switch (action.type) {
    case WS_FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };
    case WS_FEED_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_FEED_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_FEED_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};
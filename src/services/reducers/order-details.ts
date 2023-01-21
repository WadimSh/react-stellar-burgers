import { TActions } from '../actions';
import {
  GET_ORDER_NUMBER_SUCCESS,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL
} from '../constants';

type TInitialState = {
  modal: boolean,
  order: number | null,
  isOrderLoading: boolean,
  hasOrderError: boolean,
};

const initialState: TInitialState = {
  modal: false,
  order: null,
  isOrderLoading: false,
  hasOrderError: false,
};

export const orderReducer = (state = initialState, action: TActions): TInitialState => {
  switch (action.type) {
    case OPEN_ORDER_MODAL: {
      return {
        ...state,
        modal: true
      }
    }
    case GET_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        isOrderLoading: false,
        hasOrderError: false,
        order: action.orderNumber
      }
    }
    case CLOSE_ORDER_MODAL: {
      return {
        ...state,
        modal: false,
        order: null
      }
    }
    default: {
      return state;
    }
  }
};
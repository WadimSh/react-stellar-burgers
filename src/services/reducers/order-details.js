import {
  GET_ORDER_NUMBER_SUCCESS,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL
} from '../constants';

const initialState = {
  modal: false,
  order: null
};

export const orderReducer = (state = initialState, action) => {
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
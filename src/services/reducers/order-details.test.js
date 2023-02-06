import { orderReducer } from './order-details';
import {
  GET_ORDER_NUMBER_SUCCESS,
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL
} from '../constants';

describe('orderReducer', () => {
  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual({
      modal: false,
      order: null,
      isOrderLoading: false,
      hasOrderError: false,
    })
  })

  it('should handle OPEN_ORDER_MODAL', () => {
    expect(orderReducer({}, {
      type: OPEN_ORDER_MODAL,
    })).toEqual({
      modal: true
    })
  })

  it('should handle GET_ORDER_NUMBER_SUCCESS', () => {
    expect(orderReducer({}, {
      type: GET_ORDER_NUMBER_SUCCESS,
      orderNumber: 39793,
    })).toEqual({
      isOrderLoading: false,
      hasOrderError: false,
      order: 39793
    })
  })

  it('should handle CLOSE_ORDER_MODAL', () => {
    expect(orderReducer({}, {
      type: CLOSE_ORDER_MODAL,
    })).toEqual({
      modal: false,
      order: null
    })
  })
});
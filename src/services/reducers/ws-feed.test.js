import { wsFeedReducer } from './ws-feed';
import {
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_GET_MESSAGE
} from '../constants';

describe('wsFeedReducer', () => {
  it('should return the initial state', () => {
    expect(wsFeedReducer(undefined, {})).toEqual({
      wsConnected: false,
      orders: [],
      total: 0,
      totalToday: 0,
      error: null,
    })
  })

  it('should handle WS_FEED_CONNECTION_SUCCESS', () => {
    expect(wsFeedReducer({}, {
      type: WS_FEED_CONNECTION_SUCCESS,
    })).toEqual({
      wsConnected: true,
      error: null,
    })
  })

  it('should handle WS_FEED_CONNECTION_ERROR', () => {
    expect(wsFeedReducer({}, {
      type: WS_FEED_CONNECTION_ERROR,
      payload: 'MessageEvent'
    })).toEqual({
      wsConnected: false,
      error: 'MessageEvent',
    })
  })

  it('should handle WS_FEED_CONNECTION_CLOSED', () => {
    expect(wsFeedReducer({}, {
      type: WS_FEED_CONNECTION_CLOSED
    })).toEqual({
      wsConnected: false,
      error: null,
    })
  })

  it('should handle WS_FEED_GET_MESSAGE', () => {
    expect(wsFeedReducer({}, {
      type: WS_FEED_GET_MESSAGE,
      payload: {
        orders: [{
          ingredients: [{
            calories: 420,
            carbohydrates: 53,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
            image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            name: "Краторная булка N-200i",
            price: 1255,
            proteins: 80,
            type: "bun",
            __v: 0,
            _id: "60d3b41abdacab0026a733c6",
          }],
          _id: "63dff832936b17001be59a73",
          status: "done",
          name: "Spicy традиционный-галактический краторный бургер",
          number: 39793,
          createdAt: "2023-02-05T18:40:50.944Z",
          updatedAt: "2023-02-05T18:40:51.851Z",
        }],
        total: 39750,
        totalToday: 462,
      }
    })).toEqual({
      orders: [{
        ingredients: [{
          calories: 420,
          carbohydrates: 53,
          fat: 24,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          name: "Краторная булка N-200i",
          price: 1255,
          proteins: 80,
          type: "bun",
          __v: 0,
          _id: "60d3b41abdacab0026a733c6",
        }],
        _id: "63dff832936b17001be59a73",
        status: "done",
        name: "Spicy традиционный-галактический краторный бургер",
        number: 39793,
        createdAt: "2023-02-05T18:40:50.944Z",
        updatedAt: "2023-02-05T18:40:51.851Z",
      }],
      total: 39750,
      totalToday: 462,
      error: null,
    })
  })
});
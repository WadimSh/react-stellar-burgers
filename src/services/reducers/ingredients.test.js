import { ingredientsReducer } from './ingredients';
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../constants';

describe('ingredientsReducer', () => {
  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual({
      data: [],
      isLoading: false,
      hasError: false,
    })
  })

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(ingredientsReducer({}, {
      type: GET_INGREDIENTS_REQUEST,
    })).toEqual({
      isLoading: true,
      hasError: false
    })
  })

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(ingredientsReducer({}, {
      type: GET_INGREDIENTS_SUCCESS,
      data: [{
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
      }]
    })).toEqual({
      isLoading: false,
      hasError: false,
      data: [{
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
      }]
    })
  })

  it('should handle GET_INGREDIENTS_FAILED', () => {
    expect(ingredientsReducer({}, {
      type: GET_INGREDIENTS_FAILED,
    })).toEqual({
      isLoading: false,
      hasError: true,
      data: []
    })
  })
})
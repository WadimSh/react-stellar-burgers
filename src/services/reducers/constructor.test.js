import { burgerReducer } from './constructor';
import {
  ADD_BUN,
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  DELETE_INGREDIENT,
  CLEAN_INGREDIENT
} from '../constants';

describe('burgerReducer', () => {
  it('should return the initial state', () => {
    expect(burgerReducer(undefined, {})).toEqual({
      bun: null,
      ingredients: []
    })
  })

  it('should handle ADD_BUN', () => {
    expect(burgerReducer({}, {
      type: ADD_BUN,
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
      bun: [{
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

  it('should handle ADD_INGREDIENT', () => {
    expect(burgerReducer({
      ingredients: [{
        calories: 420,
        carbohydrates: 33,
        fat: 244,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        name: "Мясо бессмертных моллюсков Protostomia",
        price: 1337,
        proteins: 433,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c9",
      }]
    }, {
      type: ADD_INGREDIENT,
      data: {
        calories: 643,
        carbohydrates: 85,
        fat: 26,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        name: "Филе Люминесцентного тетраодонтимформа",
        price: 988,
        proteins: 44,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c8",
      }
    })).toEqual({
      ingredients: [{
        calories: 420,
        carbohydrates: 33,
        fat: 244,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        name: "Мясо бессмертных моллюсков Protostomia",
        price: 1337,
        proteins: 433,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c9",
        },        
        {
        calories: 643,
        carbohydrates: 85,
        fat: 26,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        name: "Филе Люминесцентного тетраодонтимформа",
        price: 988,
        proteins: 44,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c8",
      }]
    })
  })

  it('should handle MOVE_INGREDIENT', () => {
    expect(burgerReducer({
      ingredients: [{
        calories: 643,
        carbohydrates: 85,
        fat: 26,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        name: "Филе Люминесцентного тетраодонтимформа",
        price: 988,
        proteins: 44,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c8",
      },
      {
        calories: 420,
        carbohydrates: 33,
        fat: 244,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        name: "Мясо бессмертных моллюсков Protostomia",
        price: 1337,
        proteins: 433,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c9",
      }]
    }, {
      type: MOVE_INGREDIENT,
      data: {
        dragIndex: 0,
        hoverIndex: 1,
      }
    })).toEqual({
      ingredients: [{
        calories: 420,
        carbohydrates: 33,
        fat: 244,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        name: "Мясо бессмертных моллюсков Protostomia",
        price: 1337,
        proteins: 433,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c9",
      },
      {
        calories: 643,
        carbohydrates: 85,
        fat: 26,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        name: "Филе Люминесцентного тетраодонтимформа",
        price: 988,
        proteins: 44,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c8",
      }]
    })
  })

  it('should handle DELETE_INGREDIENT', () => {
    expect(burgerReducer({
      ingredients: [{
        calories: 420,
        carbohydrates: 33,
        fat: 244,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        name: "Мясо бессмертных моллюсков Protostomia",
        price: 1337,
        proteins: 433,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c9",
        id: 1,
      },
      {
        calories: 643,
        carbohydrates: 85,
        fat: 26,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        name: "Филе Люминесцентного тетраодонтимформа",
        price: 988,
        proteins: 44,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c8",
        id: 2
      }]
    }, {
      type: DELETE_INGREDIENT,
      id: 1,
    })).toEqual({
      ingredients: [{
        calories: 643,
        carbohydrates: 85,
        fat: 26,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        name: "Филе Люминесцентного тетраодонтимформа",
        price: 988,
        proteins: 44,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c8",
        id: 2,
      }]
    })
  })

  it('should handle CLEAN_INGREDIENT', () => {
    expect(burgerReducer({
      ingredients: [{
        calories: 420,
        carbohydrates: 33,
        fat: 244,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        name: "Мясо бессмертных моллюсков Protostomia",
        price: 1337,
        proteins: 433,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c9",
      },
      {
        calories: 643,
        carbohydrates: 85,
        fat: 26,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        name: "Филе Люминесцентного тетраодонтимформа",
        price: 988,
        proteins: 44,
        type: "main",
        __v: 0,
        _id: "60d3b41abdacab0026a733c8",
      }],
      bun: [{
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
    }, {
      type: CLEAN_INGREDIENT,
    })).toEqual({
      ingredients: [],
      bun: null,
    })
  })
})
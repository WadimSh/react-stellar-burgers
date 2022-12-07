import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { burgerReducer } from './constructor';
import { ingredientReducer } from './ingredient-details';
import { orderReducer } from './order-details';

const rootReducer = combineReducers({
  ingredientsBurger: ingredientsReducer,
  currentBurger: burgerReducer,
  ingredientData: ingredientReducer,
  orderNumber: orderReducer
});

export default rootReducer;
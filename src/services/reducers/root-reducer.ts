import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { burgerReducer } from './constructor';
import { orderReducer } from './order-details';
import { auth } from './auth';

const rootReducer = combineReducers({
  ingredientsBurger: ingredientsReducer,
  currentBurger: burgerReducer,
  orderNumber: orderReducer,
  auth: auth,
});

export default rootReducer;
import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { burgerReducer } from './constructor';
import { orderReducer } from './order-details';
import { auth } from './auth';
import { wsFeedReducer } from "./ws-feed";
import { wsOrdersReducer } from "./ws-orders";

const rootReducer = combineReducers({
  ingredientsBurger: ingredientsReducer,
  currentBurger: burgerReducer,
  orderNumber: orderReducer,
  wsFeed: wsFeedReducer,
  wsOrders: wsOrdersReducer,
  auth: auth,
});

export default rootReducer;
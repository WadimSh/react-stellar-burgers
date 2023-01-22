import {
  IGetIngredientsRequest,
  IGetIngredientsFailed,
  IGetIngredientsSuccess,
  IAddIngredient,
  IMoveIngredient,
  IDeleteIngredient,
  ICleanIngredient,
  IAddBun,
  IGetOrderNumberSuccess,
  IGetOrderNumberRequest,
  IGetOrderNumberFailed,
  IOpenOrderModal,
  ICloseOrderModal,
} from './actions';

import {
  IRegisterUser,
  IRegisterUserRequest,
  IRegisterUserFailed,
  ILoginUser,
  ILoginUserRequest,
  ILoginUserFailed,
  IUpdateToken,
  IUpdateTokenRequest,
  IUpdateTokenFailed,
  ILogout,
  ILogoutRequest,
  ILogoutFailed,
  IRequestPassword,
  IRequestPasswordRequest,
  IRequestPasswordFailed,
  IResetPassword,
  IResetPasswordRequest,
  IResetPasswordFailed,
  IGetUser,
  IGetUserRequest,
  IGetUserFailed,
  IUpdateUser,
  IUpdateUserRequest,
  IUpdateUserFailed,
} from './auth-actions';

import {
  IWsFeedConnectionStart,
  IWsFeedConnectionSuccess,
  IWsFeedConnectionError,
  IWsFeedConnectionClosed,
  IWsFeedGetMessage,
} from './ws-feed-actions';

import {
  IWsOrdersConnectionStart,
  IWsOrdersConnectionSuccess,
  IWsOrdersConnectionError,
  IWsOrdersConnectionClosed,
  IWsOrdersGetMessage,
} from './ws-orders-actions';

export type TActions =
  | IGetIngredientsRequest
  | IGetIngredientsFailed
  | IGetIngredientsSuccess
  | IAddIngredient
  | IMoveIngredient
  | IDeleteIngredient
  | ICleanIngredient
  | IAddBun
  | IGetOrderNumberSuccess
  | IGetOrderNumberRequest
  | IGetOrderNumberFailed
  | IOpenOrderModal
  | ICloseOrderModal
  | IRegisterUser
  | IRegisterUserRequest
  | IRegisterUserFailed
  | ILoginUser
  | ILoginUserRequest
  | ILoginUserFailed
  | IUpdateToken
  | IUpdateTokenRequest
  | IUpdateTokenFailed
  | ILogout
  | ILogoutRequest
  | ILogoutFailed
  | IRequestPassword
  | IRequestPasswordRequest
  | IRequestPasswordFailed
  | IResetPassword
  | IResetPasswordRequest
  | IResetPasswordFailed
  | IGetUser
  | IGetUserRequest
  | IGetUserFailed
  | IUpdateUser
  | IUpdateUserRequest
  | IUpdateUserFailed
  | IWsFeedConnectionStart
  | IWsFeedConnectionSuccess
  | IWsFeedConnectionError
  | IWsFeedConnectionClosed
  | IWsFeedGetMessage
  | IWsOrdersConnectionStart
  | IWsOrdersConnectionSuccess
  | IWsOrdersConnectionError
  | IWsOrdersConnectionClosed
  | IWsOrdersGetMessage
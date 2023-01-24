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
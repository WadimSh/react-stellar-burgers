import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TActions } from '../actions/actions';
import { TAuthActions } from '../actions/auth-actions';
import store from '../..';

type TApplicationActions = TActions | TAuthActions;

export type TRootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, TRootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
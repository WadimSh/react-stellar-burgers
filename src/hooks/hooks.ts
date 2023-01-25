import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';
import { AppDispatch, AppThunk, TRootState } from '../services/types';

export const useAppSelector: TypedUseSelectorHook<TRootState> = selectorHook;

export const useAppDispatch = () => dispatchHook<AppDispatch & AppThunk>();
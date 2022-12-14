import { useEffect, FC } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ProtectedRoute from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { TLocation } from '../../types/types';
import { getUser } from '../../services/actions/auth-actions';
import { Login, Register, ForgotPassword, ResetPassword, Profile, Ingredients, NotFound } from '../../pages';
import { getIngredientsBurger } from '../../services/actions/actions';
import style from './App.module.css';

const App: FC = () => {
  const location = useLocation<TLocation>();
  const history = useHistory();
  const dispatch = useDispatch<any>();
    
  const { isAuth } = useSelector((store: any) => store.auth);
  const isLoading = useSelector((store: any) => store.ingredientsBurger.isLoading);
  const hasError = useSelector((store: any) => store.ingredientsBurger.hasError);
  const background = location.state && location.state.background;
  
  const clickButton = () => {
    history.goBack();
  };
  
  useEffect(() => {
    dispatch(getIngredientsBurger());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth && localStorage.getItem('jwt')) {
      dispatch(getUser());
    }
  }, []);
  
  return (
    <div className={style.App}>
      <AppHeader />
      <Switch location={background || location}>
      <Route path="/" exact={true}>
        <Main>
          {isLoading && "Загрузка..."}
          {hasError && "Произошла ошибка"}
          {!isLoading && !hasError && (
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          )}
        </Main>
      </Route>
      <Route path="/login" exact={true}>
        <Login />
      </Route>
      <Route path="/register" exact={true}>
        <Register />
      </Route>
      <Route path="/forgot-password" exact={true}>
        <ForgotPassword />
      </Route>
      <Route path="/reset-password" exact={true}>
        <ResetPassword />
      </Route>
      <Route path="/ingredients/:id" exact={true}>
        <Ingredients />
      </Route>
      <ProtectedRoute path="/profile">
        <Profile />
      </ProtectedRoute>
      <Route>
        <NotFound />
      </Route>
      </Switch>
      {background && (
        <Route path="/ingredients/:id">
          <Modal onClose={clickButton} header="Детали ингредиента">
            <IngredientDetails />
          </Modal>
        </Route>
      )}
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, Switch } from 'react-router-dom';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { Login, Register, ForgotPassword, ResetPassword, Profile, Ingredients, NotFound } from '../../pages';
import { getIngredientsBurger } from '../../services/actions/actions';
import style from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ingredientsBurger.isLoading);
  const hasError = useSelector((store) => store.ingredientsBurger.hasError);
  
  useEffect(() => {
    dispatch(getIngredientsBurger());
  }, [dispatch]);
  
  return (
    <div className={style.App}>
      <AppHeader />
      <Switch>
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
      </Switch>
    </div>
  );
}

export default App;
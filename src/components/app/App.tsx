import { useEffect, FC, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, Switch, useLocation, useHistory, useRouteMatch } from 'react-router-dom';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ProtectedRoute from '../protected-route/protected-route';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrdersDetail from '../orders/orders-detail/orders-detail';
import { Login, Register, ForgotPassword, ResetPassword, Profile, Ingredients, NotFound, Feed } from '../../pages';

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { TLocation } from '../../types/types';
import { getUser } from '../../services/actions/auth-actions';
import { getIngredientsBurger } from '../../services/actions/actions';
import style from './App.module.css';

type TUseRouteMatch = {
  [id: string]: string | undefined
}

const App: FC = () => {
  const location = useLocation<TLocation>();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const background = location.state && location.state.background;
    
  const { isAuth } = useAppSelector((store) => store.auth);
  const isLoading = useAppSelector((store) => store.ingredientsBurger.isLoading);
  const hasError = useAppSelector((store) => store.ingredientsBurger.hasError);
  const profileFeed = useAppSelector((store) => store.wsFeed.orders);
  const profileOrders = useAppSelector((store) => store.wsOrders.orders);

  const [orderNumber, setOrderNumber] = useState<number | undefined>(0);
  const id = useRouteMatch<TUseRouteMatch>(["/feed/:id"])?.params?.id;
  const idOrder = useRouteMatch<TUseRouteMatch>(["/profile/orders/:id"])?.params?.id;
  
  useEffect(() => {
    if (id !== undefined) {
      const order = profileFeed.find((order) => order._id === id);
      setOrderNumber(order?.number)
    }
    if (idOrder !== undefined) {
      const order = profileOrders.find((order) => order._id === idOrder);
      setOrderNumber(order?.number)
    }
  }, [location]);
  
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
  console.log(isAuth)
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
      <Route path="/feed" exact={true}>
        <Feed />
      </Route>
      <ProtectedRoute path="/profile">
        <Profile />
      </ProtectedRoute>
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
      <Route path="/feed/:id" exact={true}>
        <OrdersDetail />
      </Route>
      <ProtectedRoute path="/profile/orders/:id">
        <OrdersDetail />
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
      {background && id && (
        <Route path="/feed/:id">
          <Modal onClose={clickButton} header={`#${orderNumber}`}>
            <OrdersDetail />
          </Modal>
        </Route>
      )}
      {background && idOrder && (
        <ProtectedRoute path="/profile/orders/:id">
          <Modal onClose={clickButton} header={`#${orderNumber}`}>
            <OrdersDetail />
          </Modal>
        </ProtectedRoute>
      )}
    </div>
  );
}

export default App;

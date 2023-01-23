import { FC } from "react";
import { useDispatch } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';

import ProfileForm from './profile-form/profile-form';
import Orders from '../../components/orders/orders';
import style from "./profile.module.css";
import { logout } from '../../services/actions/auth-actions';

const Profile: FC = () => {
  const dispatch = useDispatch<any>();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section className={style.wrapper}>
      <nav className={style.nav}>
        <ul className={style.items}>
          <li className={style.item}>
            <NavLink
              to="/profile"
              exact
              className={style.link}
              activeClassName={style.linkActive}
            >
              Профиль
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              to="/profile/orders"
              exact
              className={style.link}
              activeClassName={style.linkActive}
            >
              История заказов
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              to="/login"
              exact
              className={style.link}
              activeClassName={style.linkActive}
              onClick={handleLogout}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className={style.description}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <Switch>
        <Route exact path="/profile">
          <ProfileForm />
        </Route>
        <Route exact path="/profile/orders">
          <Orders />
        </Route>
      </Switch>
    </section>
  );
}

export default Profile;
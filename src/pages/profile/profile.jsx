import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch, NavLink } from 'react-router-dom';

import ProfileForm from './profile-form/profile-form';
import style from "./profile.module.css";
import { logout, getUser, updateUser } from '../../services/actions/actions';

function Profile() {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const { user } = useSelector((store) => store.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
        <p
          className={style.description}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <Switch>
        <Route exact path={`${path}`}>
          <ProfileForm
            
          />
        </Route>
      </Switch>
    </section>
  );
}

export default Profile;
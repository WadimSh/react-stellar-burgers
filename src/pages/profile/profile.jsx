import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';

import useInputs from '../../hooks/use-inputs';
import ProfileForm from './profile-form/profile-form';
import style from "./profile.module.css";
import { logout, updateUser } from '../../services/actions/actions';

function Profile() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);
  const { values, handleValues, setValues } = useInputs({ name: user.name, email: user.email, password: user.password });
  const [disabledButton, setDisabledButton] = useState(false);

  const handleUpdate = () => {
    dispatch(updateUser(values.name, values.email, values.password));
  };

  const handleReset = () => {
    setValues({ name: user.name, email: user.email, password: user.password });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setDisabledButton(!disabledButton);
  }, [values]);

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
        <Route exact path="/profile">
          <ProfileForm
            values={values}
            handleValues={handleValues}
            handleReset={handleReset}
            handleUpdate={handleUpdate}
            disabledButton={disabledButton}
          />
        </Route>
      </Switch>
    </section>
  );
}

export default Profile;
import { FC } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useAppSelector } from "../../hooks/hooks";
import { TLocation } from '../../types/types';
import style from './app-header.module.css';

const AppHeader: FC = () => {
  const location = useLocation<TLocation>();
  const { isAuth, user } = useAppSelector((store) => store.auth);
  
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink exact to="/" className={style.link} activeClassName={style.linkActive}>
          <BurgerIcon
           type="secondary"
          />
          Конструктор
        </NavLink>
        <NavLink exact to="/feed" className={style.link} activeClassName={style.linkActive}>
          <ListIcon
           type="secondary"
          />
          Лента заказов
        </NavLink>
        <Link to="/" className={style.logo}>
          <Logo />
        </Link>
        <NavLink exact to="/profile" className={location.pathname === "/profile/orders" ? style.linkActive : style.link} activeClassName={style.linkActive}>
          <ProfileIcon
           type="secondary"
          />
          {isAuth ? `${user.name}` : "Личный кабинет"}
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
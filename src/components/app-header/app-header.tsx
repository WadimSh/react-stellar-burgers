import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './app-header.module.css';

const AppHeader: FC = () => {

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
        <NavLink exact to="/profile" className={style.link} activeClassName={style.linkActive}>
          <ProfileIcon
           type="secondary"
          />
          Личный кабинет
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
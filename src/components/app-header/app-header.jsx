import { NavLink } from 'react-router-dom';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './app-header.module.css';

function AppHeader() {

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink to="/" className={style.link} activeClassName={style.linkActive}>
          <BurgerIcon
           type="primary"
          />
          Конструктор
        </NavLink>
        <NavLink to="/orders" className={style.link} activeClassName={style.linkActive}>
          <ListIcon
           type="secondary"
          />
          Лента заказов
        </NavLink>
        <div className={style.logo}>
          <Logo />
        </div>
        <NavLink to="/profile" className={style.link} activeClassName={style.linkActive}>
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
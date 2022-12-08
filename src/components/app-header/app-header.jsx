import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './app-header.module.css';

function AppHeader() {

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <a href='/' className={style.link}>
          <BurgerIcon
           type="primary"
          />
          Конструктор
        </a>
        <a href='/' className={style.link}>
          <ListIcon
           type="secondary"
          />
          Лента заказов
        </a>
        <a href='/' className={style.link}>
          <Logo />
        </a>
        <a href='/' className={style.link}>
          <ProfileIcon
           type="secondary"
          />
          Личный кабинет
        </a>
      </nav>
    </header>
  );
}

export default AppHeader;
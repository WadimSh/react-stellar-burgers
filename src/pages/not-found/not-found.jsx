import { useHistory } from 'react-router-dom';

import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./not-found.module.css";

function NotFound() {
  const history = useHistory();

  return (
    <section className={style.container}>
      <h2 className={style.title}>404</h2>
      <p className={style.subtitle}>Страница не найдена</p>
      <Button htmlType="button" type="primary" size="medium" onClick={() => history.goBack()}>
        Назад
      </Button>
    </section>
  );
}

export default NotFound;
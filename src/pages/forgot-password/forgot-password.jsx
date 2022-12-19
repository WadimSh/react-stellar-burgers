import { useState, useCallback } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./forgot-password.module.css";
import { requestPassword } from '../../services/actions/actions';

function ForgotPassword() {
  const { isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(requestPassword(email));
      history.push('/reset-password');
    },
    [email]
  );

  if (isAuth) {
    return (
      <Redirect to={{
        pathname: '/',
      }}
      />
    );
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>
        Восстановление пароля
      </h2>
      <form className={style.form}>
        <div className={style.wrapper}>
          <EmailInput
            onChange={onEmailChange}
            placeholder={"Укажите e-mail"}
            value={email}
            name={"email"}
            size="default"
          />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={(e) => handleForgotPassword(e)}>
          Восстановить
        </Button>
      </form>
      <p className={style.text}>
        Вспомнили пароль?
        <Link className={style.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
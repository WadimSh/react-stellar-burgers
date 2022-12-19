import { useState, useCallback } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./login.module.css";
import { login } from '../../services/actions/actions';

function Login() {
  const { isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(login(email, password));
    },
    [password, email]
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
        Вход
      </h2>
      <form className={style.form}>
        <div className={style.wrapper}>
          <EmailInput
            onChange={onEmailChange}
            value={email}
            name={"email"}
            size="default"
          />
        </div>
        <div className={style.wrapper}>
          <PasswordInput
            onChange={onPasswordChange}
            value={password}
            name={"password"}
            size="default"
          />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={(e) => handleLogin(e)}>
          Войти
        </Button>
      </form>
      <p className={style.text}>
        Вы — новый пользователь?
        <Link className={style.link} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className={style.text}>
        Забыли пароль?
        <Link className={style.link} to="/forgot-password">
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
}

export default Login;
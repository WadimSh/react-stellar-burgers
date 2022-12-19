import { useState, useCallback } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./reset-password.module.css";
import { resetPassword } from '../../services/actions/actions';

function ResetPassword() {
  const { isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const onTokenChange = (e) => {
    setToken(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleResetPassword = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(resetPassword(token, password));
      history.push('/login');
    },
    [token, password]
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
          <PasswordInput
            placeholder={"Введите новый пароль"}
            onChange={onPasswordChange}
            value={password}
            name={"password"}
            size="default"
          />
        </div>
        <div className={style.wrapper}>
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={onTokenChange}
            value={token}
            name={"token"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={(e) => handleResetPassword(e)}>
          Сохранить
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

export default ResetPassword;
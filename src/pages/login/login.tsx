import { useCallback, FC, FormEvent } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { TLocation } from '../../types/types';
import useInputs from '../../hooks/use-inputs';
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./login.module.css";
import { login } from '../../services/actions/auth-actions';

const Login: FC = () => {
  const location = useLocation<TLocation>();
  const dispatch = useAppDispatch();

  const { isAuth } = useAppSelector((store) => store.auth);
  const { values, handleValues } = useInputs({ email: "", password: "" });
  const { from } = location.state || { from: { pathname: "/" } };
  
  const handleLogin = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(login(values.email, values.password));
    },
    [values.password, values.email]
  );

  if (isAuth) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <section className={style.container}>
      <h2 className={style.title}>
        Вход
      </h2>
      <form className={style.form} onSubmit={(e) => handleLogin(e)}>
        <div className={style.wrapper}>
          <EmailInput
            onChange={handleValues}
            value={values.email}
            name={"email"}
            size="default"
          />
        </div>
        <div className={style.wrapper}>
          <PasswordInput
            onChange={handleValues}
            value={values.password}
            name={"password"}
            size="default"
          />
        </div>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!values.password || !values.email}
        >
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
    </section>
  );
}

export default Login;
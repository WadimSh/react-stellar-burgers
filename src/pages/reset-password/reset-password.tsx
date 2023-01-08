import { useCallback, FC, FormEvent } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { TLocation } from '../../types/types';
import useInputs from '../../hooks/use-inputs';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./reset-password.module.css";
import { resetPassword } from '../../services/actions/auth-actions';

const ResetPassword: FC = () => {
  const dispatch = useDispatch<any>();
  const history = useHistory();
  const location = useLocation<TLocation>();

  const { isAuth } = useSelector((store: any) => store.auth);
  const { values, handleValues } = useInputs({ password: "", token: "" });
  const { from } = location.state || { from: { pathname: "/" } };

  const handleResetPassword = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(resetPassword(values.password, values.token));
      history.push('/login');
    },
    [values.token, values.password]
  );

  if (isAuth) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <section className={style.container}>
      <h2 className={style.title}>
        Восстановление пароля
      </h2>
      <form className={style.form} onSubmit={(e) => handleResetPassword(e)}>
        <div className={style.wrapper}>
          <PasswordInput
            placeholder={"Введите новый пароль"}
            onChange={handleValues}
            value={values.password}
            name={"password"}
            size="default"
          />
        </div>
        <div className={style.wrapper}>
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={handleValues}
            value={values.token}
            name={"token"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!values.password || !values.token}
        >
          Сохранить
        </Button>
      </form>
      <p className={style.text}>
        Вспомнили пароль?
        <Link className={style.link} to="/login">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default ResetPassword;
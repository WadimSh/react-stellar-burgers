import { useState, useCallback, FC, FormEvent, ChangeEvent } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { TLocation } from '../../types/types';
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./forgot-password.module.css";
import { requestPassword } from '../../services/actions/auth-actions';

const ForgotPassword: FC = () => {
  const dispatch = useDispatch<any>();
  const history = useHistory();
  const location = useLocation<TLocation>();

  const { isAuth } = useSelector((store: any) => store.auth);
  const [email, setEmail] = useState<string>("");
  const { from } = location.state || { from: { pathname: "/" } };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(requestPassword(email));
      history.push('/reset-password');
    },
    [email]
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
      <form className={style.form} onSubmit={(e) => handleForgotPassword(e)}>
        <div className={style.wrapper}>
          <EmailInput
            onChange={onEmailChange}
            placeholder={"Укажите e-mail"}
            value={email}
            name={"email"}
            size="default"
          />
        </div>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!email}
        >
          Восстановить
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

export default ForgotPassword;
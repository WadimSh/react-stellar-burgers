import { useCallback, FC, FormEvent } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "../../hooks/hooks";
import { TLocation } from '../../types/types';
import useInputs from '../../hooks/use-inputs';
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./register.module.css";
import { register } from '../../services/actions/auth-actions';

const Register: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<TLocation>();

  const { isAuth } = useSelector((store) => store.auth);
  const { values, handleValues } = useInputs({ name: "", email: "", password: "" });
  const { from } = location.state || { from: { pathname: "/" } };
  
  const handleRegister = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(register(values.name, values.email, values.password));
    },
    [values.name, values.password, values.email]
  );

  if (isAuth) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <section className={style.container}>
      <h2 className={style.title}>
        Регистрация
      </h2>
      <form className={style.form} onSubmit={(e) => handleRegister(e)}>
        <div className={style.wrapper}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={handleValues}
            value={values.name}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
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
          disabled={!values.password || !values.email || !values.name}
        >
          Зарегистрироваться
        </Button>
      </form>
      <p className={style.text}>
        Уже зарегистрированы?
        <Link className={style.link} to="/login">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
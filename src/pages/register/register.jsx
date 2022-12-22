import { useCallback } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import useInputs from '../../hooks/use-inputs';
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./register.module.css";
import { register } from '../../services/actions/actions';

function Register() {
  const { isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { values, handleValues } = useInputs({ name: "", email: "", password: "" }) 
  
  const handleRegister = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(register(values.name, values.email, values.password));
    },
    [values.name, values.password, values.email]
  );

  if (isAuth) {
    return (
      <Redirect to='/' />
    );
  }

  return (
    <section className={style.container}>
      <h2 className={style.title}>
        Регистрация
      </h2>
      <form className={style.form}>
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
          htmlType="button"
          type="primary"
          size="medium"
          onClick={(e) => handleRegister(e)}
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
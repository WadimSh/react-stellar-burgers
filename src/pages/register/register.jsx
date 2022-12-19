import { useState } from "react";
import { Link } from "react-router-dom";

import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./register.module.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>
        Регистрация
      </h2>
      <form className={style.form}>
        <div className={style.wrapper}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onNameChange}
            value={name}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
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
        <Button htmlType="button" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <p className={style.text}>
        Уже зарегистрированы?
        <Link className={style.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
import { useState } from "react";
import { Link } from "react-router-dom";

import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
        <Button htmlType="button" type="primary" size="medium">
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
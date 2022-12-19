import { useState } from "react";
import { Link } from "react-router-dom";

import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./reset-password.module.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
            onChange={onNameChange}
            value={name}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <Button htmlType="button" type="primary" size="medium">
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
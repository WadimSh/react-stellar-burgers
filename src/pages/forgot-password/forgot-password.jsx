import { useState } from "react";
import { Link } from "react-router-dom";

import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./forgot-password.module.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>
        Восстановление пароля
      </h2>
      <form className={style.form}>
        <div className={style.wrapper}>
          <EmailInput
            onChange={onEmailChange}
            placeholder={"Укажите e-mail"}
            value={email}
            name={"email"}
            size="default"
          />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Восстановить
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

export default ForgotPassword;
import { useState, useEffect, useCallback, FC, FormEvent } from 'react';

import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import useInputs from '../../../hooks/use-inputs';
import { updateUser } from '../../../services/actions/auth-actions';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './profile-form.module.css';

const ProfileForm: FC = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((store) => store.auth);
  const { values, handleValues, setValues } = useInputs({ name: user.name, email: user.email, password: "" });
  const [disabledButton, setDisabledButton] = useState(false);

  const handleUpdate = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    dispatch(updateUser(values.name, values.email, values.password));
    setDisabledButton(!disabledButton);
  },
  [values, disabledButton]
);

  const handleReset = () => {
    setValues({ name: user.name, email: user.email, password: "" });
  };

  useEffect(() => {
    setDisabledButton(!disabledButton);
  }, [values]);

  return (
    <form className={style.form} onSubmit={(e) => handleUpdate(e)}>
      <Input
        type="text"
        name="name"
        value={values.name}
        placeholder="Имя"
        icon="EditIcon"
        onChange={handleValues}
        error={false}
        errorText={"Ошибка"}
      />
      <Input
        type="email"
        name="email"
        value={values.email}
        placeholder="Логин"
        icon="EditIcon"
        onChange={handleValues}
        error={false}
        errorText={"Ошибка"}
      />
      <Input
        type="password"
        name="password"
        value={values.password}
        placeholder="Пароль"
        icon="EditIcon"
        onChange={handleValues}
        error={false}
        errorText={"Ошибка"}
      />
      <div className={style.buttons}>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={handleReset}
          disabled={!disabledButton}
        >
          Oтмена
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={!disabledButton}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
}

export default ProfileForm;
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useInputs from '../../../hooks/use-inputs';
import { updateUser } from '../../../services/actions/actions';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './profile-form.module.css';

function ProfileForm() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);
  const { values, handleValues, setValues } = useInputs({ name: user.name, email: user.email, password: user.password });
  const [disabledButton, setDisabledButton] = useState(false);

  const handleUpdate = () => {
    dispatch(updateUser(values.name, values.email, values.password));
    setDisabledButton(!disabledButton);
  };

  const handleReset = () => {
    setValues({ name: user.name, email: user.email, password: user.password });
  };

  useEffect(() => {
    setDisabledButton(!disabledButton);
  }, [values]);

  return (
    <form className={style.form}>
      <Input
        type="text"
        name="name"
        value={values.name}
        placeholder="Имя"
        icon="EditIcon"
        onChange={handleValues}
      />
      <Input
        type="email"
        name="email"
        value={values.email}
        placeholder="Логин"
        icon="EditIcon"
        onChange={handleValues}
      />
      <Input
        type="password"
        name="password"
        value={values.password}
        placeholder="Пароль"
        icon="EditIcon"
        onChange={handleValues}
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
          htmlType="button"
          type="primary"
          size="medium"
          onClick={handleUpdate}
          disabled={!disabledButton}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
}

export default ProfileForm;
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './profile-form.module.css';

function ProfileForm({ values, handleValues, handleReset, handleUpdate, disabledButton }) {
  const { name, email, password } = values;

  return (
    <form className={style.form}>
      <Input
        type="text"
        name="name"
        value={name}
        placeholder="Имя"
        icon="EditIcon"
        onChange={handleValues}
      />
      <Input
        type="email"
        name="email"
        value={email}
        placeholder="Логин"
        icon="EditIcon"
        onChange={handleValues}
      />
      <Input
        type="password"
        name="password"
        value={password}
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
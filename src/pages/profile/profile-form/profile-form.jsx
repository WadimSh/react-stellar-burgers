import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './profile-form.module.css';

function ProfileForm({ name, email, password, onNameChange, onEmailChange, onPasswordChange }) {

  return (
    <form className={style.form}>
      <Input
        type="text"
        name="name"
        value={name}
        placeholder="Имя"
        icon="EditIcon"
        onChange={onNameChange}
      />
      <Input
        type="email"
        name="email"
        value={email}
        placeholder="Логин"
        icon="EditIcon"
        onChange={onEmailChange}
      />
      <Input
        type="password"
        name="password"
        value={password}
        placeholder="Пароль"
        icon="EditIcon"
        onChange={onPasswordChange}
      />
    </form>
  );
}

export default ProfileForm;
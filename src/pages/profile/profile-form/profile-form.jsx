import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './profile-form.module.css';

function ProfileForm() {

  return (
    <form className={style.form}>
      <Input
        type="text"
        name="name"
        
        placeholder="Имя"
        icon="EditIcon"
        
      />
      <Input
        type="email"
        name="email"
        
        placeholder="Логин"
        icon="EditIcon"
        
      />
      <Input
        type="password"
        name="password"
       
        placeholder="Пароль"
        icon="EditIcon"
        
      />
    </form>
  );
}

export default ProfileForm;
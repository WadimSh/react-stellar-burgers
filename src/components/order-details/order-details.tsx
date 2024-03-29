import { FC } from 'react';

import { useAppSelector } from "../../hooks/hooks";
import style from './order-details.module.css';
import done from '../../images/done.png';

const OrderDetails: FC = () => {
const orderNumber = useAppSelector((store) => store.orderNumber.order);

return (
  <div className={style.wrapper} data-cy="order-details">
    <h2 className={style.title}>{orderNumber}</h2>
    <p className={style.subtitle}>{orderNumber ? 'идентификатор заказа' : 'Загружается ...'}</p>
    <img className={style.img} src={done} alt="иконка" />
    <p className={style.text}>Ваш заказ начали готовить</p>
    <p className={style.info}>Дождитесь готовности на орбитальной станции</p>
  </div>
)}

export default OrderDetails;

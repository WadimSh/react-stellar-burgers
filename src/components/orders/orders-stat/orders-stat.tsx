import { FC } from 'react'

import { useSelector } from "../../../hooks/hooks";
import { ordersFilter } from "../../../utils/orders-filter";
import style from "./orders-stat.module.css";

const OrdersStat: FC = () => {
  const { total, totalToday, orders } = useSelector((store) => store.wsFeed);

  const statusArrays = ordersFilter(orders);
  const doneStatusOrder = statusArrays?.done.slice(0, 30);
  const pendingStatusOrder = statusArrays?.pending.slice(0, 30);

  return (
    <section className={style.container}>
      <div className={style.box}>
        <div className={style.column}>
          <p className={style.title}>Готовы:</p>
          <ul className={style.orderList}>
            {doneStatusOrder.map((order) => {
              return (
                <li className={style.itemDone} key={order._id}>
                  {order.number}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.column}>
          <p className={style.title}>В работе:</p>
          <ul className={style.orderList}>
            {pendingStatusOrder.map((order) => {
              return (
                <li className={style.itemPending} key={order._id}>
                  {order.number}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={style.wrapper}>
        <p className={style.subtitle}>Выполнено за все время:</p>
        <h2 className={style.itemTotal}>
          {total}
        </h2>
      </div>
      <div className={style.wrapper}>
        <p className={style.subtitle}>Выполнено за сегодня:</p>
        <h2 className={style.itemTotal}>
          {totalToday}
        </h2>
      </div>
    </section>
  );
}

export default OrdersStat;

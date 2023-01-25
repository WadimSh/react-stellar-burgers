import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAppSelector } from "../../hooks/hooks";
import OrdersCard from "./orders-card/orders-card";
import style from "./orders.module.css";

const OrdersFeed: FC = () => {
  const location = useLocation();
  const { orders } = useAppSelector((store) => store.wsFeed);
  
  
  return (
    <section className={style.orderList}>
      {orders &&
        orders.map((order) => {
          return (
            <Link
              to={{
                pathname: `${location.pathname}/${order._id}`,
                state: { background: location },
              }}
              className={style.link}
              key={order._id}
            >
              <OrdersCard order={order} key={order._id} status={false} />
            </Link>
          );
        })}
    </section>
  );
}

export default OrdersFeed;
import { FC, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "../../hooks/hooks";
import { wsOrdersConnectionClosed, wsOrdersConnectionStart } from "../../services/actions/ws-orders-actions";

import OrdersCard from "./orders-card/orders-card";
import style from "./orders.module.css";

const Orders: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { orders } = useSelector((store) => store.wsOrders);
  useEffect(() => {
    dispatch(wsOrdersConnectionStart());
    return () => {
      dispatch(wsOrdersConnectionClosed());
    };
  }, [dispatch]);
  
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
        }).reverse()}
    </section>
  );
}

export default Orders;
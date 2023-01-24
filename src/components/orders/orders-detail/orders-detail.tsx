import { FC, useEffect, useMemo } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

import { useSelector, useDispatch } from "../../../hooks/hooks";
import { wsFeedConnectionClosed, wsFeedConnectionStart } from "../../../services/actions/ws-feed-actions";
import { wsOrdersConnectionClosed, wsOrdersConnectionStart } from "../../../services/actions/ws-orders-actions";
import { TLocation, TIngredient } from "../../../types/types";

import OrdersIngredients from "../orders-ingredients/orders-ingredients";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { dataFormat } from "../../../utils/data-formate";
import style from "./orders-detail.module.css";

const OrdersDetail: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const location = useLocation<TLocation>();
  const background = location.state?.background;
  const profile = useRouteMatch({ path: '/profile/orders/:id' });
  console.log(location)
  const ingredients = useSelector((store) => store.ingredientsBurger.data);
  const feedOrders = useSelector((store) => store.wsFeed.orders);
  const profileOrders = useSelector((store) => store.wsOrders.orders);

  let orders = profile !== null ? profileOrders : feedOrders;
  let order = orders.find((order) => order._id === id);

  const orderIngredients = useMemo(() => {
    return order?.ingredients.map((id) => {
      return ingredients?.find((item) => {
        return id === item._id;
      });
    });
  }, [order?.ingredients, ingredients]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredients?.reduce((sum, item) => {
      if (item?.type === "bun") {
        return (sum += item.price * 2);
      }
      if (item?.type !== ("bun" && undefined)) {
        return (sum += item.price);
      }
      return sum
    }, 0);
  }, [orderIngredients]);

  useEffect(() => {
    if (!order) {
      dispatch(profile !== null ? wsOrdersConnectionStart() : wsFeedConnectionStart());
      }
    return () => {
      dispatch(profile !== null ? wsOrdersConnectionClosed() : wsFeedConnectionClosed());
      }
  }, [dispatch, order]);

  return (
    <>
      {order && (
        <div className={style.container}>
          {!background && (
            <p className={style.subtitle}>#{order.number}</p>
          )}
          <h2 className={style.title}>{order.name}</h2>
          {order.status && (
            <p className={style.status}>
              {order.status === "done"
              ? "Выполнен" : order.status === "pending"
              ? "Готовится" : order.status === "created"
              ? "Создан" : "Выполнен"}
            </p>
          )}
          <h3 className={style.caption}>Состав:</h3>
          <div>
          <OrdersIngredients details={orderIngredients as Array<TIngredient>} />
          </div>
          <div className={style.total}>
            <p className={style.totalLabel}>{dataFormat(order.createdAt)}</p>
            <div className={style.price}>
              <p className={style.priceLabel}>{orderTotalPrice}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrdersDetail;

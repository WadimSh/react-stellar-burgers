import { useMemo, FC } from "react";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../../hooks/hooks";
import OrdersImg from "../orders-img/orders-img";
import { dataFormat } from "../../../utils/data-formate";
import style from "./orders-card.module.css";

import { TOrder } from "../../../types/types";

interface IOrderCard {
  order: TOrder;
  status: boolean;
}

const OrdersCard: FC<IOrderCard> = ({ order, status }) => {
  const ingredients = useAppSelector((store) => store.ingredientsBurger.data);
  const { createdAt, number, name } = order;
  const arrIngredientsLength = order.ingredients.length;
  const hideIngredients = arrIngredientsLength - 5;
  const maxIngredients = 6;

  const orderIngredientsData = useMemo(() => {
    return order?.ingredients.map((id) => {
      return ingredients?.find((item) => {
        return id === item._id;
      });
    });
  }, [order.ingredients, ingredients]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredientsData?.reduce((sum, item) => {
      if (item?.type === "bun") {
        return (sum += item.price * 2);
      }
      return (sum += item ? item.price : 0);
    }, 0);
  }, [orderIngredientsData]);

  return (
    <div className={style.container}>
      <div className={style.orderid}>
        <p className={style.number}>#{number}</p>
        <p className={style.data}>
          {dataFormat(createdAt)}
        </p>
      </div>
      <div className={style.info}>
        <h2 className={style.text}>{name}</h2>
        {status && (
          <p className={style.status}>
            {order.status === "done"
              ? "Выполнен"
              : order.status === "pending"
              ? "Готовится"
              : order.status === "created"
              ? "Создан"
              : "Выполнен"}
          </p>
        )}
      </div>
      <div className={style.price}>
        <ul className={style.list}>
          {orderIngredientsData &&
            arrIngredientsLength <= 5 &&
            orderIngredientsData.map((item, index) => {
              let zIndex = maxIngredients - index;
              return (
                <li
                  className={style.items}
                  style={{ zIndex: zIndex }}
                  key={index}
                >
                  {item && <OrdersImg image={item.image} alt={item.name} />}
                </li>
              );
            })}
          {orderIngredientsData &&
            arrIngredientsLength === 6 &&
            orderIngredientsData.slice(0, 6).map((item, index) => {
              let zIndex = maxIngredients - index;
              return (
                <li
                  className={style.items}
                  style={{ zIndex: zIndex }}
                  key={index}
                >
                  {item && <OrdersImg image={item.image} alt={item.name} />}
                </li>
              );
            })}
          {orderIngredientsData &&
            arrIngredientsLength > 6 &&
            orderIngredientsData.slice(0, 5).map((item, index) => {
              let zIndex = maxIngredients - index;
              return (
                <li
                  className={style.items}
                  style={{ zIndex: zIndex }}
                  key={index}
                >
                  {item && <OrdersImg image={item.image} alt={item.name} />}
                </li>
              );
            })}
          {orderIngredientsData &&
            arrIngredientsLength > 6 &&
            orderIngredientsData.slice(5, 6).map((item, index) => {
              let zIndex = -index;
              return (
                <li
                  className={style.items}
                  style={{ zIndex: zIndex }}
                  key={index}
                >
                  {item && (
                    <>
                      <p
                        className={style.hideText}
                      >{`+${hideIngredients}`}</p>
                      <div className={style.hidePic}>
                        <OrdersImg image={item.image} alt={item.name} />
                      </div>
                    </>
                  )}
                </li>
              );
            })}
        </ul>
        <div className={style.price}>
          <p className={style.totalPrice}>
            {orderTotalPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}

export default OrdersCard;

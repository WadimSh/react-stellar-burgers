import { FC, useMemo } from "react";

import { useSelector } from "../../../hooks/hooks";
import { TIngredient } from "../../../types/types";

import OrdersImg from "../orders-img/orders-img";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./orders-ingredients.module.css";

interface IOrderDetails {
	details: Array<TIngredient>;
}

const OrdersIngredients: FC<IOrderDetails> = ({ details }) => {
  const ingredients = useSelector((store) => store.ingredientsBurger.data);
  
  const count = (elem: object) => {
    let count = details.filter((item) => {
      return item === elem;
    }).length;
    return count;
  };

  const orderIngredient = useMemo(() => {
    return details?.map((elem) => {
      return ingredients?.find((item) => {
        return elem._id === item._id;
      });
    });
  }, [details, ingredients]);

  const filterIngredient = orderIngredient.filter((item, index) => {
    return orderIngredient.indexOf(item) === index
  });


  return (
    <ul className={style.scroller}>
      {filterIngredient.map((item: any) => {
          return (
            <li className={style.item} key={item?._id}>
              {item && (
                <>
                  <div className={style.prof}>
                    <OrdersImg image={item.image} alt={item.name} />
                    <p className={style.name}>{item.name}</p>
                  </div>
                  <div className={style.price}>
                    <p className={style.count}>
                    {item.type === "bun"
                      ? `${count(item) * 2} x ${item.price}`
                      : `${count(item)} x ${item.price}`}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                </>
              )}
            </li>
          )
        })}
    </ul>
  );
}

export default OrdersIngredients;

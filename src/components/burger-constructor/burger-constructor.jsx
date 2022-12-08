import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient';
import TotalPrice from '../total-price/total-price';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { postOrderBurger, OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL, ADD_BUN, ADD_INGREDIENT } from '../../services/actions/actions';
import style from './burger-constructor.module.css';

function BurgerConstructor() {
  const dispatch = useDispatch();
  const { bun, ingredients } = useSelector((store) => store.currentBurger);
  const { modal } = useSelector((store) => store.orderNumber);
  const [total, setTotal] = useState(0);

  const clickButton = () => {
    dispatch({ type: CLOSE_ORDER_MODAL });
  };
  const indexIngredients = useMemo(() => [bun, ...ingredients].map((item) => item._id), [bun, ingredients]);
  
  useEffect(() => {
    const totalPrice = ingredients.reduce((total, current) => total + current.price, bun._id ? bun.price * 2 : 0);
    setTotal(totalPrice);
  }, [bun, ingredients]);

  const handleOrder = () => {
    dispatch(postOrderBurger(indexIngredients));
    dispatch({ type: OPEN_ORDER_MODAL });
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (item.element.type === "bun") {
        dispatch({
          type: ADD_BUN,
          data: { ...item.element, id: Date.now() },
        });
      } else {
        dispatch({
          type: ADD_INGREDIENT,
          data: { ...item.element, id: Date.now() },
        });
      }
    }
  });

  return (
    <section className={style.section} ref={dropTarget}>
      {modal && (
        <Modal onClose={clickButton} header={" "}>
          <OrderDetails />
        </Modal>
      )}
      {bun._id ? (
        <div className={style.bun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={`${bun.price}`}
          thumbnail={`${bun.image}`}
        />
      </div>) : (
        <div className={style.top}>Перетащите сюда булку</div>
      )}
      {ingredients.length > 0 ? (
        <ul className={style.list}>
        {ingredients.map((item, index) => <BurgerConstructorIngredient item={item} index={index} key={item.id} />
        )}
      </ul>
      ) : (
        <div className={style.unactive}>Перетащите сюда ингредиенты</div>
      )}
      
      {bun._id ? (
      <div className={style.bun}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={`${bun.price}`}
          thumbnail={`${bun.image}`}
        />
      </div>) : (
        <div className={style.botton}>Перетащите сюда булку</div>
      )}      

      <TotalPrice
       totalPrice={total}
       clickButton={handleOrder}
      />
    </section>
  )
}

export default BurgerConstructor;
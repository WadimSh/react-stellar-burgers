import { useState, useEffect, useMemo, FC } from 'react';
import { useDrop } from "react-dnd";
import { useHistory } from 'react-router-dom';

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient';
import TotalPrice from '../total-price/total-price';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import { useSelector, useDispatch } from "../../hooks/hooks";
import { TIngredient, TIngredientConstructor } from '../../types/types';
import { postOrderBurger } from '../../services/actions/actions';
import { OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL, ADD_BUN, ADD_INGREDIENT, CLEAN_INGREDIENT } from '../../services/constants';
import style from './burger-constructor.module.css';

type TDropItem = {
	element: TIngredientConstructor;
  _id: string;
  bun: TIngredient;
  fillings: TIngredientConstructor[]
}

const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { bun, ingredients } = useSelector((store: any) => store.currentBurger);
  const { isAuth } = useSelector((store) => store.auth);
  const { modal } = useSelector((store) => store.orderNumber);
  const [total, setTotal] = useState<number>(0);

  const clickButton = () => {
    dispatch({ type: CLOSE_ORDER_MODAL });
  };
  const indexIngredients = useMemo(() => [bun, ...ingredients].map((item) => item._id), [bun, ingredients]);
  
  useEffect(() => {
    const totalPrice = ingredients.reduce((total: number, current: TIngredient) => total + current.price, bun._id ? bun.price * 2 : 0);
    setTotal(totalPrice);
  }, [bun, ingredients]);

  const handleOrder = () => {
    if (isAuth) {
      dispatch(postOrderBurger(indexIngredients));
      dispatch({ type: OPEN_ORDER_MODAL });
      dispatch({
        type: ADD_BUN,
        data: {},
      });
      dispatch({
        type: CLEAN_INGREDIENT
      });
    } else {
      history.push('/login');
    }
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: TDropItem) {
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
          price={bun.price}
          thumbnail={`${bun.image}`}
        />
      </div>) : (
        <div className={style.top}>Перетащите сюда булку</div>
      )}
      {ingredients.length > 0 ? (
        <ul className={style.list}>
        {ingredients.map((item: TIngredientConstructor, index: number) => <BurgerConstructorIngredient item={item} index={index} key={item.id} />
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
          price={bun.price}
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
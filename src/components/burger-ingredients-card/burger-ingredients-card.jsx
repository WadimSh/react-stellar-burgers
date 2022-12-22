import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation, } from "react-router-dom";
import PropTypes from 'prop-types';

import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { messagePropTypes } from '../../utils/messagePropTypes';
import style from './burger-ingredients-card.module.css';

function BurgerIngredientsCard({ element }) {
  const location = useLocation();
  const { bun, ingredients } = useSelector((store) => store.currentBurger);
 
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: { element },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? .8 : 1,
    }),
  });

  const counter = useMemo(() => (count = 0) => {
    for (let { _id } of ingredients) if (_id === element._id) count++;
    if (bun && bun._id === element._id) return 2;
    return count;
    },
  [bun, ingredients, element._id]);
   
  return (
    <Link
      to={{
        pathname: `/ingredients/${element._id}`,
        state: { background: location },
      }}
      className={style.item}
      style={{ opacity }}
      ref={dragRef}
    >
      {counter() !== 0 && <Counter count={counter()} size="default" />}
      <img src={element.image} className={style.image} alt={element.name} />
      <p className={style.price}>
        <span className={style.number}>{element.price}</span>
        <CurrencyIcon
          type="primary"
        />
      </p>
      <p className={style.text}>{element.name}</p>
    </Link>
  )
}

BurgerIngredientsCard.propTypes = {
  element: PropTypes.objectOf(messagePropTypes).isRequired
}
                      
export default BurgerIngredientsCard;

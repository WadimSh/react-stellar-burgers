import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation, } from "react-router-dom";
import PropTypes from 'prop-types';

import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { messagePropTypes } from '../../utils/messagePropTypes';
import style from './burger-ingredients-card.module.css';

function BurgerIngredientsCard({ element, handleElement }) {
  const location = useLocation();
  const { bun, ingredients } = useSelector((store) => store.currentBurger);
  const clickElement = () => { handleElement(element) };

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
    <div className={style.item} key={element._id} onClick={clickElement} style={{ opacity }} ref={dragRef}>
      {counter() !== 0 && <Counter count={counter()} size="default" />}
      <img src={element.image} className={style.image} alt={element.name} />
      <p className={style.price}>
        <span className={style.number}>{element.price}</span>
        <CurrencyIcon
          type="primary"
        />
      </p>
      <p className={style.text}>{element.name}</p>
    </div>
  )
}

BurgerIngredientsCard.propTypes = {
  element: PropTypes.objectOf(messagePropTypes).isRequired,
  handleElement: PropTypes.func.isRequired
}
                      
export default BurgerIngredientsCard;

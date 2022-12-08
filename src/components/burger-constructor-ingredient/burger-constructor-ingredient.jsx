import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from 'prop-types';

import { MOVE_INGREDIENT, DELETE_INGREDIENT } from '../../services/actions/actions';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../burger-constructor/burger-constructor.module.css';

function BurgerConstructorIngredient({ item, index }) {
  const dispatch = useDispatch();
  const ref = useRef();
  const { image, id, price, name } = item;
  
  const onDelete = (id) => {
    dispatch({ type: DELETE_INGREDIENT, id });
  };

  const [, drop] = useDrop({
    accept: "item",
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      dispatch({
        type: MOVE_INGREDIENT,
        data: { dragIndex, hoverIndex },
      });
      item.index = hoverIndex;
    },
  });

  const [{ opacity }, drag] = useDrag({
    type: "item",
    item: { id, index },
    collect: (monitor) => {
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
    },
  });

  drag(drop(ref));


  return (
    <li className={style.item} style={{ opacity }} ref={ref}>
      <DragIcon
       type="primary"
      />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => onDelete(item.id)}
      />
    </li>
  )
}

BurgerConstructorIngredient.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default BurgerConstructorIngredient;

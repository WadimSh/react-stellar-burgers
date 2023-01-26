import { useRef, FC } from "react";
import { useDrag, useDrop } from "react-dnd";

import { useAppDispatch } from "../../hooks/hooks";
import { TIngredientConstructor } from '../../types/types';
import { MOVE_INGREDIENT, DELETE_INGREDIENT } from '../../services/constants';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../burger-constructor/burger-constructor.module.css';

interface IConstructorItems {
  index: number, 
  item: TIngredientConstructor;
}

type TDragItem = {
	index: number;
	type: string;
	id?: string;
};

const BurgerConstructorIngredient: FC<IConstructorItems> = ({ item, index }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLLIElement>(null);
  const { image, id, price, name } = item;
  
  const onDelete = (id: string) => {
    dispatch({ type: DELETE_INGREDIENT, id });
  };

  const [, drop] = useDrop<TDragItem>({
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

export default BurgerConstructorIngredient;

import { FC } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../hooks/hooks";
import { TIngredient } from '../../types/types';
import style from './ingredient-details.module.css';

type TParams = {
  id: string;
};

const IngredientDetails: FC = () => {
  const { id } = useParams<TParams>();
  const ingredients = useAppSelector((store) => store.ingredientsBurger.data);
  const ingredient = ingredients.find((item: TIngredient) => item._id === id);

  if (!ingredient) return null;
  
return (
    <div className={style.wrapper}>
      <img className={style.img} src={ingredient?.image} alt={ingredient?.name} />
      <h2 className={style.title}>{ingredient?.name}</h2>
      <ul className={style.list}>
        <li className={style.item}>
          <span className={style.category}>Калории,ккал</span>
          <span className={style.content}>{ingredient?.calories}</span>
        </li>
        <li className={style.item}>
          <span className={style.category}>Белки, г</span>
          <span className={style.content}>{ingredient?.proteins}</span>
        </li>
        <li className={style.item}>
          <span className={style.category}>Жиры, г</span>
          <span className={style.content}>{ingredient.fat}</span>
        </li>
        <li className={style.item}>
          <span className={style.category}>Углеводы, г</span>
          <span className={style.content}>{ingredient?.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
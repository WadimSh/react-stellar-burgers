import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import style from "./ingredients.module.css";

function Ingredients() {
  const { id } = useParams();
  const ingredients = useSelector((store) => store.ingredients.data);
  const currentIngredient = useMemo(() => ingredients.find((item) => item._id === id), [ingredients]);

  return (
    <div className={style.wrapper}>
      {currentIngredient && (<IngredientDetails ingredient={currentIngredient} />)}
    </div>
  );
}


export default Ingredients;
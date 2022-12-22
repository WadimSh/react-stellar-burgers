import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import style from "./ingredients.module.css";

function Ingredients() {
  
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>
        Детали ингредиента
      </h2>
      <IngredientDetails />
    </div>
  );
}


export default Ingredients;
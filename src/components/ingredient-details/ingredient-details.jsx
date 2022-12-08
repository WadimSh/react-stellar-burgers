import { useSelector } from 'react-redux';

import style from './ingredient-details.module.css';

function IngredientDetails() {
const { ingredient } = useSelector((store) => store.ingredientData);
  
return (
    <div className={style.wrapper} key={ingredient._id}>
      <img className={style.img} src={ingredient.image} alt={ingredient.name} />
      <h2 className={style.title}>{ingredient.name}</h2>
      <ul className={style.list}>
        <li className={style.item}>
          <span className={style.category}>Калории,ккал</span>
          <span className={style.content}>{ingredient.calories}</span>
        </li>
        <li className={style.item}>
          <span className={style.category}>Белки, г</span>
          <span className={style.content}>{ingredient.proteins}</span>
        </li>
        <li className={style.item}>
          <span className={style.category}>Жиры, г</span>
          <span className={style.content}>{ingredient.fat}</span>
        </li>
        <li className={style.item}>
          <span className={style.category}>Углеводы, г</span>
          <span className={style.content}>{ingredient.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
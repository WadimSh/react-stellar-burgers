import { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsBlock from '../burger-ingredients-block/burger-ingredients-block';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { DELETE_INGREDIENT_DATA, ADD_INGREDIENT_DATA } from '../../services/actions/actions';
import style from './burger-ingredients.module.css';

function BurgerIngredients() {
  const [current, setCurrent] = useState("bun");
  const [bunRef, bunInView] = useInView();
  const [sauceRef, sauceInView] = useInView();
  const [mainRef, mainInView] = useInView();
 
  const dispatch = useDispatch();
  const { modal } = useSelector((store) => store.ingredientData);

  const clickTab = (e) => {
    setCurrent(e);
    document.getElementById(e).scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleIngredientScroll = () => {
    switch (true) {
      case bunInView:
        setCurrent("bun");
        break;
      case sauceInView:
        setCurrent("sauce");
        break;
      case mainInView:
        setCurrent("main");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleIngredientScroll();
  },
  [bunInView, sauceInView, mainInView]);

  const handleElement = (ingredient) => {
    dispatch({ type: ADD_INGREDIENT_DATA, ingredient });
  };

  const clickButton = () => {
    dispatch({ type: DELETE_INGREDIENT_DATA });
  };

  return (
    <section className={style.section}>
      {modal && (
        <Modal onClose={clickButton} header={"Детали ингредиента"}>
          <IngredientDetails />
        </Modal>
      )}
      <h1 className={style.title}>Соберите бургер</h1>
      <div className={style.tabs}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={(e) => clickTab(e)}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={(e) => clickTab(e)}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={(e) => clickTab(e)}
        >
          Начинки
        </Tab>
      </div>
      <div className={style.list}>
        <BurgerIngredientsBlock
          tabRef={bunRef}
          type="bun"
          name="Булки"
          handleElement={handleElement}
        />
        <BurgerIngredientsBlock
          tabRef={sauceRef}
          type="sauce"
          name="Соусы"
          handleElement={handleElement}
        />
        <BurgerIngredientsBlock
          tabRef={mainRef}
          type="main"
          name="Начинки"
          handleElement={handleElement}
        />
      </div>
    </section>
  )
}

export default BurgerIngredients;
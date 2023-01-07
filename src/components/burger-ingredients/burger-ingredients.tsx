import { useState, useEffect, FC } from 'react';
import { useInView } from "react-intersection-observer";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsBlock from '../burger-ingredients-block/burger-ingredients-block';
import style from './burger-ingredients.module.css';

const BurgerIngredients: FC = () => {
  const [current, setCurrent] = useState<string>("bun");
  const [bunRef, bunInView] = useInView();
  const [sauceRef, sauceInView] = useInView();
  const [mainRef, mainInView] = useInView();
 
  const clickTab = (e: string) => {
    setCurrent(e);
    const section = document.getElementById(e) as HTMLElement;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
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

  return (
    <section className={style.section}>
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
        />
        <BurgerIngredientsBlock
          tabRef={sauceRef}
          type="sauce"
          name="Соусы"
        />
        <BurgerIngredientsBlock
          tabRef={mainRef}
          type="main"
          name="Начинки"
        />
      </div>
    </section>
  )
}

export default BurgerIngredients;
import { FC } from 'react';
import { useSelector } from "react-redux";

import { TIngredient } from '../../types/types';
import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card';
import style from './burger-ingredients-block.module.css';

interface IIngredientsItems {
  type: string;
  name: string;
  tabRef: any;
}

const BurgerIngredientsBlock: FC<IIngredientsItems> = ({ type, name, tabRef }) => {
  const data = useSelector((store: any) => store.ingredientsBurger.data);
   
  return (
    <>
      <h2 className={style.title} ref={tabRef} id={type}>{name}</h2>
      <div className={style.grid}>
        {
          data.filter((item: TIngredient) => item.type === type).map((element: TIngredient, index: number) => (
            <BurgerIngredientsCard
              element={element}
              key={element._id}
              
            />
          ))
        }               
      </div>
    </>
  )
}

export default BurgerIngredientsBlock;

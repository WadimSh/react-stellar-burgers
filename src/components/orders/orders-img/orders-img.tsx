import { FC } from 'react';

import style from './orders-img.module.css';

interface IOrdersImg {
  image: string;
  alt: string;
}

const OrdersImg: FC<IOrdersImg> = ({ image, alt }) => {
  return (
    <div className={style.content}>
      <div className={style.item}>
        <img className={style.image} src={image} alt={alt} />
      </div>
    </div>
  );
}

export default OrdersImg;

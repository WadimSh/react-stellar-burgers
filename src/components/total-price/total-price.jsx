import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './total-price.module.css';

function TotalPrice({ totalPrice, clickButton }) {
  const logic = useMemo(() => totalPrice === 0 ? true : false, [totalPrice]);

  return (
    <div className={style.total}>
      <div className={style.priceBox}>
        <p className={style.price}>{totalPrice}</p>
        <CurrencyIcon
          type="primary"
        />
      </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={clickButton}
          disabled={logic}
        >
			    Оформить заказ
			  </Button>
      
      
    </div>
  )
}

TotalPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  clickButton: PropTypes.func.isRequired
}

export default TotalPrice;

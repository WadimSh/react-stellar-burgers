import { useEffect, FC } from "react";

import { useAppDispatch } from "../../hooks/hooks";
import { wsFeedConnectionClosed, wsFeedConnectionStart } from "../../services/actions/ws-feed-actions";

import OrdersFeed from "../../components/orders/orders-feed";
import OrdersStat from "../../components/orders/orders-stat/orders-stat";
import style from "./feed.module.css";

export const Feed: FC = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(wsFeedConnectionStart());
    return () => {
      dispatch(wsFeedConnectionClosed());
    };
  }, [dispatch]);

  return (
    <section className={style.page}>
      <h2 className={style.title}>Лента заказов</h2>
      <div className={style.container}>
        <OrdersFeed />
        <OrdersStat />
      </div>
    </section>
  );
}

export default Feed;
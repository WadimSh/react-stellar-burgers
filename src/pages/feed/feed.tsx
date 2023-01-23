import { useEffect, FC } from "react";

import { useDispatch } from "../../hooks/hooks";
import { wsFeedConnectionClosed, wsFeedConnectionStart } from "../../services/actions/ws-feed-actions";

import OrdersFeed from "../../components/orders/orders-feed";
import style from "./feed.module.css";

export const Feed: FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(wsFeedConnectionStart());
    return () => {
      dispatch(wsFeedConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div className={style.page}>
      <h2 className={style.title}>Лента заказов</h2>
      <div className={style.container}>
        <OrdersFeed />
       
      </div>
    </div>
  );
}

export default Feed;
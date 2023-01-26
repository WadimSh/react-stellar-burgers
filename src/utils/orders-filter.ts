import { TOrder } from '../types/types';

export const ordersFilter = (arr: Array<TOrder>) => {
    return arr?.reduce(
      (acc: { done: [] | TOrder[], pending: [] | TOrder[]}, curr) => {
        curr.status === "done"
          ? (acc.done = [...acc.done, curr])
          : (acc.pending = [...acc.pending, curr]);
        return acc;
      },
      { done: [], pending: [] }
    );
  };
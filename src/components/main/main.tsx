import { FC, PropsWithChildren } from "react";

import style from './main.module.css';

const Main: FC<PropsWithChildren> = ({children}) => {
  
  return (
    <main className={style.main}>
      {children}
    </main>
  )
}

export default Main;

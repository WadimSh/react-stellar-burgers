import PropTypes from 'prop-types';

import style from './main.module.css';

function Main({children}) {
  
  return (
    <main className={style.main}>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main;
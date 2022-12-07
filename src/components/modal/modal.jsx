import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

import style from './modal.module.css';

const modalRoot = document.getElementById("react-modals");

function Modal({ onClose, header, children }) {
  useEffect(() => {
    const closeEsc = (e) => {
      e.key === 'Escape' && onClose();
    }
    document.addEventListener("keyup", closeEsc);
    return () => {
      document.removeEventListener("keyup", closeEsc);
    };
  }, []);
    
return createPortal (
    <>
    <div className={style.modal}>
      <div className={style.header}>
        <h3 className={style.title}>{header}</h3>
        <div className={style.div}>
          <CloseIcon type="primary" onClick={onClose}/>
        </div>
      </div>
      {children}
    </div>
    <ModalOverlay onClose={onClose}/>
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string,
  children: PropTypes.node
}

export default Modal;
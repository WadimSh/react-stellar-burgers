import { useEffect, FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import style from './modal.module.css';

interface IModal {
  header: string;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: FC<IModal> = ({ onClose, header, children }) => {
  const modalRoot = document.getElementById("react-modals") as HTMLElement;
  
  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    }
    document.addEventListener("keyup", closeEsc);
    return () => {
      document.removeEventListener("keyup", closeEsc);
    };
  }, []);
    
return createPortal (
    <>
    <div className={style.modal} data-cy="modal">
      <div className={style.header}>
        <h3 className={style.title}>{header}</h3>
        <div className={style.div} data-cy="modal-close">
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

export default Modal;

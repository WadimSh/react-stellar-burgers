import { FC } from 'react';
import style from './modal-overlay.module.css';

interface IModalOverlay {
  onClose: () => void;
}

const ModalOverlay: FC<IModalOverlay> = ({ onClose }) => {
    
return (
    <div className={style.overlay} onClick={onClose}></div>
  );
}

export default ModalOverlay;

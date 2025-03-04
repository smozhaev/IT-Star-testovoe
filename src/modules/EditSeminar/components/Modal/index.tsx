import styles from './styles.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal_overlay} onClick={onClose}>
            <div
                className={styles.modal_content}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.modal_close} onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
//обертка модального окна

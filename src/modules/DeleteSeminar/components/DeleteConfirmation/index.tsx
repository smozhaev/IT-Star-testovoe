import React from 'react';
import { Seminar } from '@modules/SeminarsList';

import styles from './styles.module.scss';
import { useDeleteConfirmation } from '@modules/DeleteSeminar/hooks/useDeleteConfirmation';

interface DeleteConfirmationProps {
    targetToDelete: Seminar;
    onDelete: () => void;
    onCancel: () => void;
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
    targetToDelete,
    onDelete,
    onCancel,
}) => {
    const { timer, disabled, handleDelete } = useDeleteConfirmation({
        targetToDelete,
        onDelete,
        onCancel,
    });

    return (
        <div className={styles.deleteConfirmation}>
            <h3 className={styles.deleteConfirmation__title}>
                Вы уверены, что хотите удалить?
                <br />
                {targetToDelete.title}
            </h3>
            <p className={styles.deleteConfirmation__timer}>
                Кнопка удаления будет доступна через:{' '}
                <strong>{timer} сек</strong>
            </p>
            <div className={styles.deleteConfirmation__actions}>
                <button
                    onClick={handleDelete}
                    disabled={disabled}
                    className={`${styles.deleteConfirmation__button} ${styles.delete}`}
                >
                    Удалить
                </button>
                <button
                    onClick={onCancel}
                    className={`${styles.deleteConfirmation__button} ${styles.cancel}`}
                >
                    Отмена
                </button>
            </div>
        </div>
    );
};

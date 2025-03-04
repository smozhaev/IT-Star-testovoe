import { Seminar } from '@modules/SeminarsList';
import React, { useState, useEffect } from 'react';
import { deleteSeminar } from '@modules/DeleteSeminar/api/deleteSeminar';
import styles from './styles.module.scss';

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
    const [disabled, setDisabled] = useState(true);
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    setDisabled(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleDelete = () => {
        deleteSeminar(targetToDelete.id);
        onDelete();
        onCancel();
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Вы уверены, что хотите удалить?
                <br />
                {targetToDelete.title}
            </h3>
            <p className={styles.timer}>
                Кнопка удаления будет доступна через:{' '}
                <strong>{timer} сек</strong>
            </p>
            <div className={styles.buttons}>
                <button
                    onClick={handleDelete}
                    disabled={disabled}
                    className={`${styles.button} ${styles.delete}`}
                >
                    Удалить
                </button>
                <button
                    onClick={onCancel}
                    className={`${styles.button} ${styles.cancel}`}
                >
                    Отмена
                </button>
            </div>
        </div>
    );
};

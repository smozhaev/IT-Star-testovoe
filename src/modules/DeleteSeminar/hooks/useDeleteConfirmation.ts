import { useState, useEffect, useCallback } from 'react';
import { deleteSeminar } from '@modules/DeleteSeminar/api/deleteSeminar';
import { Seminar } from '@modules/SeminarsList';

interface UseDeleteConfirmationProps {
    targetToDelete: Seminar;
    onDelete: () => void;
    onCancel: () => void;
}

export const useDeleteConfirmation = ({
    targetToDelete,
    onDelete,
    onCancel,
}: UseDeleteConfirmationProps) => {
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

    const handleDelete = useCallback(() => {
        deleteSeminar(targetToDelete.id);
        onDelete();
        onCancel();
    }, [targetToDelete.id, onDelete, onCancel]);

    return {
        timer,
        disabled,
        handleDelete,
    };
};

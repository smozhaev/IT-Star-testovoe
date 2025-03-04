import { useDispatch, useSelector } from 'react-redux';
import { DeleteConfirmation } from '../DeleteConfirmation';
import Modal from '../Modal';
import {
    AppDispatch,
    RootState,
    deleteSlice,
    seminarChangesSlice,
} from '@app/store';
import { useCallback } from 'react';

export const DeleteSeminar = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { isOpen, selectedCard } = useSelector(
        (state: RootState) => state.delete
    ); //глобальное состояние оповещающие об открытие формы и данные карточки которую он открыл для редактирования

    const handleClose = useCallback(() => {
        dispatch(deleteSlice.actions.closeDelete());
    }, [dispatch]); //закрывает форму

    const handleSubmit = useCallback(() => {
        dispatch(seminarChangesSlice.actions.setSeminarIsEdited(true));
    }, [dispatch]); //изменяет глобальное состояние чтобы список карточек перерисовался

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            {selectedCard && (
                <DeleteConfirmation
                    targetToDelete={selectedCard}
                    onDelete={handleSubmit}
                    onCancel={handleClose}
                />
            )}
        </Modal>
    );
};

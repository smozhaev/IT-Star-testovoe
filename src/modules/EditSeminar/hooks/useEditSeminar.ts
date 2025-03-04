import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    AppDispatch,
    editFormSlice,
    RootState,
    seminarChangesSlice,
} from '@app/store';

export const useEditSeminar = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { isOpen, selectedCard } = useSelector(
        (state: RootState) => state.editForm
    ); //глобальное состояние оповещающие об открытие формы и данные карточки которую он открыл для редактирования

    const handleClose = useCallback(() => {
        dispatch(editFormSlice.actions.closeEditForm());
    }, [dispatch]); //закрывает форму

    const handleSubmit = useCallback(() => {
        dispatch(seminarChangesSlice.actions.setSeminarIsEdited(true));
    }, [dispatch]); //изменяет глобальное состояние чтобы список карточек перерисовался

    return {
        isOpen,
        selectedCard,
        handleClose,
        handleSubmit,
    };
};

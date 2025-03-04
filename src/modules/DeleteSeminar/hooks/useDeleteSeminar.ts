import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
    AppDispatch,
    RootState,
    deleteSlice,
    seminarChangesSlice,
} from '@app/store';

export const useDeleteSeminar = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { isOpen, selectedCard } = useSelector(
        (state: RootState) => state.delete
    );

    const handleClose = useCallback(() => {
        dispatch(deleteSlice.actions.closeDelete());
    }, [dispatch]);

    const handleSubmit = useCallback(() => {
        dispatch(seminarChangesSlice.actions.setSeminarIsEdited(true));
    }, [dispatch]);

    return {
        isOpen,
        selectedCard,
        handleClose,
        handleSubmit,
    };
};

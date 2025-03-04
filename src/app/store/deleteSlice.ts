import { Seminar } from '@modules/SeminarsList';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeleteState {
    isOpen: boolean;
    selectedCard: Seminar | null;
}

const initialState: DeleteState = {
    isOpen: false,
    selectedCard: null,
};

export const deleteSlice = createSlice({
    name: 'delete',
    initialState,
    reducers: {
        openDelete: (state, action: PayloadAction<Seminar>) => {
            state.isOpen = true;
            state.selectedCard = action.payload;
        },
        closeDelete: (state) => {
            state.isOpen = false;
            state.selectedCard = null;
        },
    },
});

// Экспортируем экшены
export const { openDelete, closeDelete } = deleteSlice.actions;

// Экспортируем редьюсер
export default deleteSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditFormState {
    isOpen: boolean;
    selectedCardId: number | null;
}

const initialState: EditFormState = {
    isOpen: false,
    selectedCardId: null,
};

export const editFormSlice = createSlice({
    name: 'editForm',
    initialState,
    reducers: {
        openEditForm: (state, action: PayloadAction<number>) => {
            state.isOpen = true;
            state.selectedCardId = action.payload;
        },
        closeEditForm: (state) => {
            state.isOpen = false;
            state.selectedCardId = null;
        },
    },
});

// Экспортируем экшены
export const { openEditForm, closeEditForm } = editFormSlice.actions;

// Экспортируем редьюсер
export default editFormSlice.reducer;

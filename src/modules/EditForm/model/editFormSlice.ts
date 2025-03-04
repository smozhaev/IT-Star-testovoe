import { Seminar } from '@modules/SeminarsList';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditFormState {
    isOpen: boolean;
    selectedCard: Seminar | null;
    isEdited: boolean;
}

const initialState: EditFormState = {
    isOpen: false,
    selectedCard: null,
    isEdited: false,
};

export const editFormSlice = createSlice({
    name: 'editForm',
    initialState,
    reducers: {
        openEditForm: (state, action: PayloadAction<Seminar>) => {
            state.isOpen = true;
            state.selectedCard = action.payload;
        },
        closeEditForm: (state) => {
            state.isOpen = false;
            state.selectedCard = null;
        },
        formIsEdited: (state, action: PayloadAction<boolean>) => {
            state.isEdited = action.payload;
        },
    },
});

// Экспортируем экшены
export const { openEditForm, closeEditForm, formIsEdited } =
    editFormSlice.actions;

// Экспортируем редьюсер
export default editFormSlice.reducer;

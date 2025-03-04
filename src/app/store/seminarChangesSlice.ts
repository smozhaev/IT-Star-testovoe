import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SeminarChangesState {
    seminarIsEdited: boolean;
}

const initialState: SeminarChangesState = {
    seminarIsEdited: false,
};

export const seminarChangesSlice = createSlice({
    name: 'seminarChanges',
    initialState,
    reducers: {
        setSeminarIsEdited: (state, action: PayloadAction<boolean>) => {
            state.seminarIsEdited = action.payload;
        },
    },
});

// Экспортируем экшены
export const { setSeminarIsEdited } = seminarChangesSlice.actions;

// Экспортируем редьюсер
export default seminarChangesSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { editFormSlice } from './editFormSlice';
import { seminarChangesSlice } from './seminarChangesSlice';
import { deleteSlice } from './deleteSlice';

export const store = configureStore({
    reducer: {
        editForm: editFormSlice.reducer,
        seminarChanges: seminarChangesSlice.reducer,
        delete: deleteSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

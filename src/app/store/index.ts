import { configureStore } from '@reduxjs/toolkit';
import { editFormSlice } from './editFormSlice';
import { seminarChangesSlice } from './seminarChangesSlice';

export const store = configureStore({
    reducer: {
        editForm: editFormSlice.reducer,
        seminarChanges: seminarChangesSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { editFormSlice } from './editFormSlice';
export { seminarChangesSlice } from './seminarChangesSlice';

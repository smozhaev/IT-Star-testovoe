import { configureStore } from '@reduxjs/toolkit';
import { editFormSlice } from '@modules/EditForm';

export const store = configureStore({
    reducer: {
        editForm: editFormSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

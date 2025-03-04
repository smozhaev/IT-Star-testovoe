import { Modal, editFormSlice } from '@modules/EditForm';
import { SeminarsList } from '@modules/SeminarsList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store';
import { EditForm } from '@modules/EditForm/components/EditForm';
import { useCallback } from 'react';

function App() {
    const dispatch = useDispatch<AppDispatch>();

    const { isOpen, selectedCard } = useSelector(
        (state: RootState) => state.editForm
    );

    const handleClose = useCallback(() => {
        dispatch(editFormSlice.actions.closeEditForm());
    }, [dispatch]);

    const handleSubmit = useCallback(() => {
        dispatch(editFormSlice.actions.formIsEdited(true));
    }, [dispatch]);

    return (
        <main>
            <h1>Семинары от IT-Start</h1>

            <Modal isOpen={isOpen} onClose={handleClose}>
                {selectedCard && (
                    <EditForm
                        initialData={selectedCard}
                        onClose={handleClose}
                        onSubmit={handleSubmit}
                    />
                )}
            </Modal>

            <SeminarsList />
        </main>
    );
}

export default App;

import { Modal, editFormSlice } from '@modules/EditForm';
import { SeminarsList } from '@modules/SeminarsList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store';

function App() {
    const isOpen = useSelector((state: RootState) => state.editForm.isOpen);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <main>
            <h1>Семинары от IT-Start</h1>
            <Modal
                isOpen={isOpen}
                onClose={() => dispatch(editFormSlice.actions.closeEditForm())}
            >
                <p>Модальное окно</p>
            </Modal>
            <SeminarsList />
        </main>
    );
}

export default App;

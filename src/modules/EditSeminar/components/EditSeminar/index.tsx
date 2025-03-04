import { EditForm } from '../EditForm';
import Modal from '../Modal';
import { useEditSeminar } from '@modules/EditSeminar/hooks/useEditSeminar';

export const EditSeminar = () => {
    const { isOpen, selectedCard, handleClose, handleSubmit } =
        useEditSeminar(); // Используем кастомный хук

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            {selectedCard && (
                <EditForm
                    initialData={selectedCard}
                    onClose={handleClose}
                    onSubmit={handleSubmit}
                />
            )}
        </Modal>
    );
};
//оборачиваем форму в модальное окно и используем логику вынесеную в хук

import { DeleteConfirmation } from '../DeleteConfirmation';
import Modal from '../Modal';
import { useDeleteSeminar } from '@modules/DeleteSeminar/hooks/useDeleteSeminar';

export const DeleteSeminar = () => {
    const { isOpen, selectedCard, handleClose, handleSubmit } =
        useDeleteSeminar();

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            {selectedCard && (
                <DeleteConfirmation
                    targetToDelete={selectedCard}
                    onDelete={handleSubmit}
                    onCancel={handleClose}
                />
            )}
        </Modal>
    );
};

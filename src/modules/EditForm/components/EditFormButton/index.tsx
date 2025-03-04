import { EditSvg } from '../EditSvg';
import styles from './styles.module.scss';
import { editFormSlice } from '@modules/EditForm';
import { AppDispatch } from '@app/store';
import { useDispatch } from 'react-redux';

interface IEditFormProps {
    cardId: number;
}

export const EditFormButton: React.FC<IEditFormProps> = ({ cardId }) => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <button
            className={styles.edit_button}
            onClick={() => dispatch(editFormSlice.actions.openEditForm(cardId))}
        >
            <span>
                <EditSvg />
            </span>
        </button>
    );
};

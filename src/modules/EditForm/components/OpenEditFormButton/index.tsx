import { EditSvg } from '../EditSvg';
import styles from './styles.module.scss';
import { editFormSlice } from '@modules/EditForm';
import { AppDispatch } from '@app/store';
import { useDispatch } from 'react-redux';
import { Seminar } from '@modules/SeminarsList';

interface IOpenEditFormProps {
    card: Seminar;
}

export const OpenEditFormButton: React.FC<IOpenEditFormProps> = ({ card }) => {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <button
            className={styles.edit_button}
            onClick={() => dispatch(editFormSlice.actions.openEditForm(card))}
        >
            <span>
                <EditSvg />
            </span>
        </button>
    );
};

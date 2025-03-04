import { EditSvg } from '../EditSvg';
import styles from './styles.module.scss';
import { AppDispatch, editFormSlice } from '@app/store';
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
            onClick={() => dispatch(editFormSlice.actions.openEditForm(card))} //передаем в форму через Redux данные карточки которые будем редактировать
        >
            <span>
                <EditSvg />
            </span>
        </button>
    );
};

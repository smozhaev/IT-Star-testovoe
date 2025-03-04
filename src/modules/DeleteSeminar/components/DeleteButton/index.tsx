import { AppDispatch, deleteSlice } from '@app/store';
import { DeleteSvg } from '../DeleteSvg';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { Seminar } from '@modules/SeminarsList';

interface IDeleteButtonProps {
    card: Seminar;
}

export const DeleteButton: React.FC<IDeleteButtonProps> = ({ card }) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <button
            className={styles.delete_button}
            onClick={() => dispatch(deleteSlice.actions.openDelete(card))}
        >
            <span>
                <DeleteSvg />
            </span>
        </button>
    );
};

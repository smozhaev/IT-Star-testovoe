import { DeleteSvg } from '../DeleteSvg';
import styles from './styles.module.scss';

export const DeleteButton = () => {
    return (
        <button className={styles.delete_button}>
            <span>
                <DeleteSvg />
            </span>
        </button>
    );
};

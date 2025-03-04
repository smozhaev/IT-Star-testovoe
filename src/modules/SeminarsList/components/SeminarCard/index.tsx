import styles from './styles.module.scss';
import { DeleteButton } from '@modules/DeleteCard';
import { OpenEditFormButton } from '@modules/EditForm';
import { Seminar } from '@modules/SeminarsList/types/types';

interface SeminarCardProps {
    seminar: Seminar;
}

export const SeminarCard: React.FC<SeminarCardProps> = ({ seminar }) => {
    return (
        <div className={styles.card}>
            <div className={styles.feature}>
                <OpenEditFormButton card={seminar} />
                <DeleteButton />
            </div>
            <img
                className={styles.image}
                src={seminar.photo}
                alt={seminar.title}
            />
            <div className={styles.content}>
                <h3 className={styles.title}>{seminar.title}</h3>
                <p className={styles.description}>{seminar.description}</p>
                <div className={styles.footer}>
                    <span className={styles.date}>Дата: {seminar.date}</span>
                    <span className={styles.time}>Время: {seminar.time}</span>
                </div>
            </div>
        </div>
    );
};

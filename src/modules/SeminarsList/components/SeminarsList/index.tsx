import { useSeminars } from '../../hooks/useSeminars';
import { SeminarCard } from '../SeminarCard';
import styles from './styles.module.scss';

export const SeminarsList = () => {
    const { seminars, loading, error } = useSeminars();

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {loading && <p className={styles.loading}>Загрузка...</p>}
                {error && (
                    <p className={styles.error}>
                        Ошибка загрузки данных: {error}
                    </p>
                )}
                {!loading &&
                    !error &&
                    seminars.map((seminar) => (
                        <SeminarCard key={seminar.id} seminar={seminar} />
                    ))}
            </div>
        </div>
    );
};

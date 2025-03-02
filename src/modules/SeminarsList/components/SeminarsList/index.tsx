import { useSeminars } from '../../hooks/useSeminars';
import styles from './styles.module.scss';
export const SeminarsList = () => {
    const { seminars, loading, error } = useSeminars();

    if (loading) return <p className={styles.loading}>Загрузка...</p>;
    if (error) return <p className={styles.error}>{error}</p>;

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {seminars.map((seminar) => (
                    <li key={seminar.id} className={styles.item}>
                        <p className={styles.title}>{seminar.title}</p>
                        <p className={styles.description}>
                            {seminar.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// компонент списка семинаров

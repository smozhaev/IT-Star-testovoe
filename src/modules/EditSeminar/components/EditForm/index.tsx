import React from 'react';
import styles from './styles.module.scss';
import { Seminar } from '@modules/SeminarsList';
import { useEditForm } from '@modules/EditSeminar/hooks/useEditForm'; // Импортируем хук
import {
    MAX_TITLE_LENGTH,
    MAX_DESCRIPTION_LENGTH,
} from '@modules/EditSeminar/constants';

interface EditFormProps {
    initialData: Seminar;
    onClose: () => void;
    onSubmit: () => void;
}

export const EditForm: React.FC<EditFormProps> = ({
    initialData,
    onClose,
    onSubmit,
}) => {
    const {
        formData,
        minDateFormatted,
        maxDateFormatted,
        handleChange,
        handleSubmit,
    } = useEditForm(initialData, onClose, onSubmit); // Используем кастомный хук

    return (
        <div className={styles.editForm}>
            <h2 className={styles.editForm__title}>Редактирование</h2>
            <form
                onSubmit={handleSubmit}
                className={styles.editForm__container}
            >
                {/* Поле имени */}
                <div className={styles.editForm__group}>
                    <label htmlFor="title" className={styles.editForm__label}>
                        Имя:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className={styles.editForm__input}
                        value={formData.title}
                        onChange={handleChange}
                        maxLength={MAX_TITLE_LENGTH}
                        required
                    />
                    <small className={styles.charCount}>
                        {formData.title.length}/{MAX_TITLE_LENGTH}
                    </small>
                </div>

                {/* Поле описания */}
                <div className={styles.editForm__group}>
                    <label
                        htmlFor="description"
                        className={styles.editForm__label}
                    >
                        Описание:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className={styles.editForm__input}
                        value={formData.description}
                        onChange={handleChange}
                        maxLength={MAX_DESCRIPTION_LENGTH}
                        required
                    />
                    <small className={styles.charCount}>
                        {formData.description.length}/{MAX_DESCRIPTION_LENGTH}
                    </small>
                </div>

                {/* Поле даты */}
                <div className={styles.editForm__group}>
                    <label htmlFor="date" className={styles.editForm__label}>
                        Дата:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className={styles.editForm__input}
                        value={formData.date}
                        min={minDateFormatted}
                        max={maxDateFormatted}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Поле времени */}
                <div className={styles.editForm__group}>
                    <label htmlFor="time" className={styles.editForm__label}>
                        Время:
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        className={styles.editForm__input}
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.editForm__actions}>
                    <button
                        type="submit"
                        className={`${styles.editForm__button} ${styles.save}`}
                    >
                        Сохранить
                    </button>
                    <button
                        type="button"
                        className={`${styles.editForm__button} ${styles.cancel}`}
                        onClick={onClose}
                    >
                        Отмена
                    </button>
                </div>
            </form>
        </div>
    );
};

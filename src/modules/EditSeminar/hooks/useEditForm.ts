import { useState, useEffect } from 'react';
import { Seminar } from '@modules/SeminarsList';
import { formatDate } from '@modules/EditSeminar/helpers/formatDate';
import { dateRestrictions } from '@modules/EditSeminar/helpers/dateRestrictions';
import { updateSeminar } from '@modules/EditSeminar/api/updateSeminars';
import { formatDateBack } from '@modules/EditSeminar/helpers/formatDateBack';

export const useEditForm = (
    initialData: Seminar,
    onClose: () => void,
    onSubmit: () => void
) => {
    const [formData, setFormData] = useState(initialData);
    const [minDateFormatted, maxDateFormatted] = dateRestrictions();

    useEffect(() => {
        setFormData({
            ...initialData,
            date: formatDate(initialData.date), // Форматируем дату при загрузке
        });
    }, [initialData]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }; // передаем из инпутов в formData

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formattedDate = formatDateBack(formData.date);
        const updatedData = {
            ...formData,
            date: formattedDate,
        };

        updateSeminar(updatedData.id, updatedData);

        (e.currentTarget as HTMLFormElement).requestSubmit();
        onSubmit();
        onClose();
    }; // отправляем данные в API и закрываем форму

    return {
        formData,
        minDateFormatted,
        maxDateFormatted,
        handleChange,
        handleSubmit,
    };
};

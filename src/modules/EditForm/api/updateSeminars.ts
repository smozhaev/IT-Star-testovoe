import axios from 'axios';

// Функция обновления данных семинара
export const updateSeminar = async (seminarId: number, updatedData: object) => {
    try {
        const res = await axios.patch(
            `http://localhost:5000/seminars/${seminarId}`,
            updatedData
        );

        return res.data;
    } catch (error) {
        throw new Error(
            axios.isAxiosError(error)
                ? error.response?.data?.message || 'Ошибка сети'
                : 'Неизвестная ошибка'
        );
    }

    updateSeminar(1, { title: 'Новый заголовок семинара', date: '2024-03-10' })
        .then((data) => console.log('Успешно обновлено:', data))
        .catch((error) => console.error('Ошибка обновления:', error.message));
};

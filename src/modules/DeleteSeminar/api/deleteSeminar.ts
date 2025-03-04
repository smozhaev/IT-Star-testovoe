import axios from 'axios';

// Функция удаления семинара
export const deleteSeminar = async (seminarId: number) => {
    try {
        const res = await axios.delete(
            `http://localhost:5000/seminars/${seminarId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log('Семинар удален:', res.data);
        return res.data;
    } catch (error) {
        throw new Error(
            axios.isAxiosError(error)
                ? error.response?.data?.message || 'Ошибка сети'
                : 'Неизвестная ошибка'
        );
    }
};

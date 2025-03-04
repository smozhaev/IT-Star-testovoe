import axios from 'axios';

// Функция обновления данных семинара
export const updateSeminar = async (seminarId: number, updatedData: object) => {
    try {
        const res = await axios.patch(
            `http://localhost:5000/seminars/${seminarId}`,
            updatedData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log(res.data);
        return res.data;
    } catch (error) {
        throw new Error(
            axios.isAxiosError(error)
                ? error.response?.data?.message || 'Ошибка сети'
                : 'Неизвестная ошибка'
        );
    }
};

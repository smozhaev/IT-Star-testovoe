import axios from 'axios';

export const getSeminars = async () => {
    try {
        const res = await axios.get('http://localhost:5000/seminars');
        return res.data;
    } catch (error) {
        throw new Error(
            axios.isAxiosError(error)
                ? error.response?.data?.message || 'Ошибка сети'
                : 'Неизвестная ошибка'
        );
    }
};

//запрос к api

import axios from 'axios';

export const getSeminars = async () => {
    try {
        const res = await axios.get('http://localhost:5000/seminars');
        return res.data;
    } catch (err) {
        console.error('Ошибка запроса:', err);
        return [];
    }
};

//запрос к api

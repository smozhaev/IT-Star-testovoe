export const formatDate = (dateString: string | undefined | null) => {
    if (!dateString) return ''; // Если `undefined` или `null`, возвращаем пустую строку

    // Проверяем, содержит ли дата точки (`DD.MM.YYYY`)
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(dateString)) {
        const [day, month, year] = dateString.split('.');
        dateString = `${year}-${month}-${day}`; // Преобразуем в `YYYY-MM-DD`
    }

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        console.error('Invalid date value:', dateString); // Логируем ошибку
        return '';
    }

    return date.toISOString().split('T')[0]; // `YYYY-MM-DD`
};

export const formatDateBack = (dateString: string) => {
    if (!dateString) return '';

    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`; // 📌 Преобразуем в `DD.MM.YYYY`
};

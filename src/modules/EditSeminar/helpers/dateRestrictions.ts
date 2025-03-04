export const dateRestrictions = () => {
    // Правильный формат минимальной даты
    const minDate = new Date('2025-01-01');
    const minDateFormatted = minDate.toISOString().split('T')[0]; // `YYYY-MM-DD`

    // Ограничиваем максимальную дату на 1 год вперед
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const maxDateFormatted = maxDate.toISOString().split('T')[0];

    return [minDateFormatted, maxDateFormatted];
};

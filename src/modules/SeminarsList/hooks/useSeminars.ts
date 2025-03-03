import { useEffect, useState } from 'react';
import { getSeminars } from '../api/getSeminars';
import { Seminar } from '../types/types';

export const useSeminars = () => {
    const [seminars, setSeminars] = useState<Seminar[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSeminars = async () => {
            setLoading(true);
            try {
                const data = await getSeminars();
                setSeminars(data);
            } catch (error) {
                setError(
                    error instanceof Error
                        ? error.message
                        : 'Ошибка загрузки данных'
                );
            } finally {
                setLoading(false);
            }
        };

        loadSeminars();
    }, []);

    return { seminars, loading, error };
};

// хук в который вынесена логика SeminarList

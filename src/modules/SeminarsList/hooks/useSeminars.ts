import { useEffect, useState } from 'react';
import { getSeminars } from '../api/getSeminars';
import { Seminar } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store';
import { seminarChangesSlice } from '@app/store/seminarChangesSlice';

export const useSeminars = () => {
    const [seminars, setSeminars] = useState<Seminar[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const seminarIsEdited = useSelector(
        (state: RootState) => state.seminarChanges.seminarIsEdited
    );
    const dispatch = useDispatch<AppDispatch>();

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
        dispatch(seminarChangesSlice.actions.setSeminarIsEdited(false));
    }, [seminarIsEdited]);

    return { seminars, loading, error };
};

// хук в который вынесена логика SeminarList

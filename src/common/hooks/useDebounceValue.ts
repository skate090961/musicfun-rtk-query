import {useEffect, useState} from 'react';

export const useDebounceValue = <T>(value: T, delay: number = 500): T => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(timer)
    }, [delay, value]);

    return debouncedValue
}

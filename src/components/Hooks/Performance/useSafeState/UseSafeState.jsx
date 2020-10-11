import { useState, useEffect, useRef } from 'react';

// Used for preventing unmounted component errors

const useSafeState = (initialValue) => {
    const isMountedRef = useRef(true);
    const [currentValue, setCurrentValue] = useState(initialValue);

    useEffect(() => {
        return () => {
            isMountedRef.current = false;
        }
    }, [isMountedRef]);

    const setSafeState = (value) => {
        if (isMountedRef && isMountedRef.current) {
            setCurrentValue(value);
        }
    }
    return [currentValue, setSafeState];
}
export default useSafeState;
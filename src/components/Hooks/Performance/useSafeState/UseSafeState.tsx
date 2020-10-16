import { useState, useEffect, useRef } from 'react';

// Used for preventing unmounted component errors

const useSafeState = (initialValue: any) => {
    const isMountedRef = useRef<boolean>(true);
    const [currentValue, setCurrentValue] = useState<any>(initialValue);

    useEffect(() => {
        return () => {
            isMountedRef.current = false;
        }
    }, [isMountedRef]);

    const setSafeState = (value: any) => {
        if (isMountedRef && isMountedRef.current) {
            setCurrentValue(value);
        }
    }
    return [currentValue, setSafeState];
}
export default useSafeState;
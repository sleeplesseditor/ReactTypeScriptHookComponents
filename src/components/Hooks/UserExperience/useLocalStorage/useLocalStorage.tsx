import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, defaultValue = "" as any) => {
    const [state, setState] = useState(
        () => window.localStorage.getItem(key) || defaultValue
    );
    
    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state, key]);
    
    return [state, setState];
}

export default useLocalStorage;

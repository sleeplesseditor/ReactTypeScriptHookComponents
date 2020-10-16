import { useEffect, useState } from 'react';

const useImageError = () => {
    const [element, setElement] = useState<any>(null); 
    const [error, setError] = useState<boolean>(false);
  
    const _handleError = () => { setError(true); }  
    const retry = () => { setError(false); }
  
    useEffect(() => {
        if(element) {
            element.addEventListener('error', _handleError);
            return () => {
                element.removeEventListener('error', _handleError);
            }
        }
      
    }, [element]);
  
    return [setElement, error, retry, element];
};

export default useImageError;
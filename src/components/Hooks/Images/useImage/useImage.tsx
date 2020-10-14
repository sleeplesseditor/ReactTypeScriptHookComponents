import { useState, useEffect } from "react";

const useImage = ({ src }: string | any) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setLoaded(true);
        img.onerror = () => setError(true);
    }, [src]);
    return {
        loaded,
        error
    };
};

export default useImage;

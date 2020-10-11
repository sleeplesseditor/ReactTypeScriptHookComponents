import React from 'react';
import './useImageLoader.scss';
import useImage from './useImage';

const UseImageLoader = ({ src, alt = "" }) => {
    const { loaded } = useImage({ src });
    return <img className={`smooth ${loaded ? 'loaded' : ''}`} src={src} alt={alt} />;
};

export default UseImageLoader;
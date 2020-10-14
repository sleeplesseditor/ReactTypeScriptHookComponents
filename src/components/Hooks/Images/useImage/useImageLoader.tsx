import React from 'react';
import './useImageLoader.scss';
import useImage from './useImage';

const UseImageLoader = ({src}: string | any) => {
    const { loaded } = useImage({ src });
    return <img className={`smooth ${loaded ? 'loaded' : ''}`} src={src} alt="" role="presentation" />;
};

export default UseImageLoader;
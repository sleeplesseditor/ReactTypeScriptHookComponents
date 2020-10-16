import React from 'react';
import UseImageError from '../../../components/Hooks/Images/useImageError/useImageError';
import '../../page-structure.scss';
import './ImageErrorPage.scss';

const ImageErrorPage = () => {
    const [setImg, hasError, retry, imgRef] = UseImageError();

    const Image = 'https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'

    if (hasError as boolean) return <div>Error!!!</div>

    return (
        <div className="page-container">
            <h2 className="page-continer-heading">useImageError Hook</h2>
            <div className="image-container">
                <img ref={setImg} src={Image} alt="hello" />
            </div>
        </div>
    )
}

export default ImageErrorPage;
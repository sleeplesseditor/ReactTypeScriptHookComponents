import React, { useState } from 'react';
import UseImageLoader from '../../../components/Hooks/Images/useImage/useImageLoader';
import './ImageLoaderPage.scss';
import '../../page-structure.scss';

const srcs = [
    "https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1573430365123-1ba5faa6b486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1572724013549-0f11f2a52657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
];

const useImageGallery = () => {
    const [selectedSrc, setSrc] = useState(srcs[0]);
    return {
      buttons: srcs.map((src, i) => (
        <button
          className={`${{ active: src === selectedSrc }}`}
          onClick={() => setSrc(src)}
          key={src}
        >
          Image {i + 1}
        </button>
      )),
      gallery: srcs.map(src =>
        src === selectedSrc ? <UseImageLoader key={src} src={selectedSrc} /> : null
      )
    };
};

const ImageLoaderPage = () => {
    const { buttons, gallery } = useImageGallery();
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">useImageLoader Hook</h2>
            <div className="image-container">
                {gallery}
            </div>
            <br />
            <div className="btn-container">
                {buttons}
            </div>
            <div className="page-container-note">
                Inspired by Alireza Valizadeh's <a className="page-note-link" target="_blank" rel="noopener noreferrer" href="https://medium.com/@alirezavalizade/rendering-images-smoothly-using-react-hooks-8cf9362263a5">article</a> 
            </div>
        </div>
    )
}

export default ImageLoaderPage;
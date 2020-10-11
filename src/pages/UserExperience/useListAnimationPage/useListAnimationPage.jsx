import React, { useState, createRef } from 'react';
import Circle from './circles';
import UseListAnimation from '../../../components/Hooks/UserExperience/useListAnimation/useListAnimation';
import { shuffleArray } from '../../../components/Hooks/Helpers/arrayManage';
import '../../page-structure.scss';
import './UseListAnimationPage.scss';

const initialImages = [
    { id: "1", text: "Image 1" },
    { id: "2", text: "Image 2" },
    { id: "3", text: "Image 3" },
    { id: "4", text: "Image 4" },
    { id: "5", text: "Image 5" }
];

const UseListAnimationPage = () => {
    const [images, setImages] = useState(initialImages);

    const reorder = () => {
        const shuffledImages = shuffleArray(images);
        setImages(shuffledImages);
    };

    return (
        <div className="page-container">
            <h2 className="page-continer-heading">useListAnimation Hook</h2>
            <div className="circles-wrapper">
                <div className="circles-group-container">
                    <h4>Horizontal Animation</h4>
                    <div className="circles-group-horizontal">
                        <UseListAnimation>
                            {images.map(({ id, text }) => (
                                <Circle key={id} id={id} text={text} ref={createRef()} />
                            ))}
                        </UseListAnimation>
                    </div>
                </div>
                <div className="button-wrapper">
                    <button className="button" onClick={reorder}>
                        Re-order images
                    </button>
                </div>
                <div className="circles-group-container">
                    <h4>Vertical Animation</h4>
                    <div className="circles-group">
                        <UseListAnimation vertical>
                            {images.map(({ id, text }) => (
                                <Circle key={id} id={id} text={text} ref={createRef()} />
                            ))}
                        </UseListAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseListAnimationPage;
import React from 'react';
import useResize from '../../../components/Hooks/Performance/useResize/useResize'
import '../../page-structure.scss';

const UseResizePage = () => {
    const size = useResize();

    return (
        <div className="page-container">
            <h2 className="page-continer-heading">useResize Hook</h2>
            <div className="page-container-content">
                <p><strong>Window Width:</strong> {size[0]}px</p>
                <p><strong>Window Height:</strong> {size[1]}px</p>
                <p className="page-container-note">Try resizing the window!</p>
            </div>
        </div>
    )
}

export default UseResizePage;
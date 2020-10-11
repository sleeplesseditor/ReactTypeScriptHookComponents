import React from 'react';
import useLocalStorage from '../../../components/Hooks/UserExperience/useLocalStorage/useLocalStorage';
import '../../page-structure.scss';
import './useLocationStoragePage.scss';

const UseLocalStoragePage = () => {
    const [name, setName] = useLocalStorage("name", "");
    
    const onChangeListener = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="page-container">
            <h2 className="page-continer-heading">useLocalStorage Hook</h2>
            <div className="local-storage-form">
                <form>
                    <label htmlFor="name">Name:</label>
                    <input id="name" onChange={onChangeListener} value={name} />
                </form>
                <div className="local-storage-form-message">
                    {name ? <strong>Hello, {name} – check the localStorage tab!</strong> : "Please type your name"}
                </div>
            </div>        
        </div>
    )
}

export default UseLocalStoragePage;
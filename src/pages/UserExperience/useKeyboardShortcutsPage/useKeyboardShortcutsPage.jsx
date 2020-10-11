import React from 'react';
import { useSingleKeyShortcut } from '../../../components/Hooks/UserExperience/useKeyboardShortcut/useKeyboardShortcuts';
import '../../page-structure.scss';
import './useKeyboardShortcutsPage.scss';

const UseKeyboardShortcutsPage = () => {
    const shortcut = useSingleKeyShortcut('/');
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">useSingleKeyShortcut Hook</h2>

            <div className="shortcutkey-container">
                <div className="shortcutkey-container-box">
                    {shortcut && <h4>Shortcut key active!</h4>}
                </div>
            </div>
            <p>Click '/' to test the shortcut key</p>
            <div className="page-container-note">
                Inspired by Gabe Ragland's <a className="page-note-link" target="_blank" rel="noopener noreferrer" href="https://usehooks.com/useKeyPress/">article</a> 
            </div>
        </div>
    )
}

export default UseKeyboardShortcutsPage;
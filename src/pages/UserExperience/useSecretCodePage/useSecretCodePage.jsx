import React, { useEffect, useState } from 'react';
import reactLogo from '../../../logo.svg';
import konamiLogo from '../../../components/Hooks/UserExperience/useSecretCode/konami-logo-full.svg';
import KonamiCode from './konami_code.png';
import KonamiSound from './konami_logo.mp3';
import { useKonamiCode } from '../../../components/Hooks/UserExperience/useSecretCode/useKonamiCode'
import '../../page-structure.scss';
import './useSecretCodePage.scss';

const useSecretCodePage = () => {
    const [logoValue, setLogoValue] = useState(false);

    const konamiCode = useKonamiCode();
    // const logo = konamiCode ? konamiLogo : reactLogo;

    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    useEffect(() => {
        if(konamiCode) {
            setLogoValue(true);
            playAudio();
        }
    }, [konamiCode])

    console.log('KC', konamiCode)

    return (
        <div className="page-container">
            <h2 className="page-continer-heading">useSecretCode Hook</h2>
            <div className="secret-code-container">
                <img src={logoValue === true ? konamiLogo : reactLogo} className="secret-code-logo" alt="logo" />
                <audio className="audio-element">
                    <source src={KonamiSound}></source>
                </audio>
            </div>
            <div className="page-container-note">
                Try inputting the Konami Code
                <img className="secret-code-konami" src={KonamiCode} alt="Konami Code"/>
                <button className="secret-code-button" onClick={() => setLogoValue(false)}>Reset</button>
            </div>
        </div>
    )

}

export default useSecretCodePage;
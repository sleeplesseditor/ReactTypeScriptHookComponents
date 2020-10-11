import React from 'react';
import Accordion from '../../../components/Accordion/Accordion';
import '../../page-structure.scss';
import './AccordionPage.scss';

const AccordionPage = () => {
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">Accordion</h2>
            <div className="accordion-container">
                <Accordion title="A">
                    <span className="accordion-text">aaaaaa</span>
                </Accordion>
                <Accordion title="B">
                    <span className="accordion-text">bbbbbb</span>
                </Accordion>
                <Accordion title="C">
                    <span className="accordion-text">cccccc</span>
                </Accordion>
            </div>
        </div>
    )
}

export default AccordionPage;
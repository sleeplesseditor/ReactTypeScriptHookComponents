import React, { useState, useRef, useEffect } from 'react';
import CaretIcon from '../Menu/Icons/caret.png';
import './Accordion.scss';

interface AccordionProps {
  children: any;
  title: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  const [active, setActive] = useState<boolean>(false);
  const contentRef = useRef<any>(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef?.current?.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  const titleStyle = {
    fontWeight: 600,
    fontSize: '14px',
  }

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toogleActive}>
        <p style={titleStyle}>{title}</p>
        <span className={active ? 'accordion-icon rotate': 'accordion-icon'}>
            <img className="accordion-icon-image" src={CaretIcon} alt="caret-icon" />
        </span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion;
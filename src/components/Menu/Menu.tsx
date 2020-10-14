import React, { useState, useEffect, useRef } from 'react';
import { NewMenu, useOutsideAlerter } from './MenuHelpers';
import './Menu.scss';
import MenuData from './Data/menu-data.json';

interface NavbarProps {
  children?: any;
  title?: string;
  icon?: React.ReactNode;
}

function Menu(navIcon: any, title: string){
  const [open, setOpen] = useState<boolean>(false);
  
  function Navbar({ children, title }: NavbarProps) {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-link">
          <h3 className='navbar-heading' data-testid='navbar-main'>
            {title}
          </h3>
        </a>
        <ul className="navbar-nav">{children}</ul>
      </nav>
    );
  }
  
  function NavItem({ icon, children }: NavbarProps) {  
    console.log('PROPS', icon, children)
    return (
      <li className="nav-item">
        <button className="icon-button" onClick={() => setOpen(!open)}>
          {icon}
        </button>
        {open && children}
      </li>
    );
  }
  
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState<string>('main');
    const [menuHeight, setMenuHeight] = useState<any>(null);
    const dropdownRef = useRef<any>(null);
    useOutsideAlerter(dropdownRef, setOpen);
  
    useEffect(() => {
      if(dropdownRef.current !== null) {
        setMenuHeight(dropdownRef.current.firstChild.offsetHeight)
      }
    }, [])
  
    function calcHeight(el: any) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
        <NewMenu
          activeMenu={activeMenu}
          activeMenuProp={activeMenu === 'main'}
          calcHeight={calcHeight}
          menuData={MenuData}
          setActiveMenu={setActiveMenu}
        />
      </div>
    );
  }

  return (
    <Navbar title={title}>
      <NavItem icon={navIcon}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}
  
export {
  Menu
};
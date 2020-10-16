import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconSelector } from './Icons/IconSelector';

interface dropDownProps {
    children: any;
    goToMenu?: string;
    leftIcon?: any;
    rightIcon?: any;
    setActiveMenu?: (activeMenu: string) => void;
    subMenu?: string;
}

interface newMenuProps {
    activeMenu: any;
    activeMenuProp: any;
    calcHeight: any;
    setActiveMenu?: (activeMenu: string) => void;
    menuData: {
        menuTitles: menuTitles[];
        subMenus: subMenus[];
    }
}

type menuTitles = {
    icon: string; 
    link: string | undefined; 
    title: any;
}

type subMenus = {
    activeMenu: any; 
    backIcon: string; 
    menuTitle: React.ReactNode; 
    menuLinks: menuLinks[];
}

type menuLinks = {
    title: string;
    icon: string;
    link: string;
}

function useOutsideAlerter(ref: any, openView: (view: boolean) => void) {
    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (ref?.current && !ref.current.contains(event.target)) {
                openView(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
}

function DropdownItem({ children, goToMenu, leftIcon, rightIcon, setActiveMenu, subMenu }: dropDownProps) {
    return (
        <a 
            href={subMenu ? subMenu : '#'} 
            className="menu-item" 
            onClick={() => goToMenu && setActiveMenu && setActiveMenu(goToMenu)}
        >
            <span className="menu-icon-button">{leftIcon}</span>
            {children}
            <span className="menu-icon-right">{rightIcon}</span>
        </a>
    );
}

const NewMenu = ({
    activeMenu,
    activeMenuProp,
    calcHeight,
    menuData: { menuTitles, subMenus },
    setActiveMenu
}: newMenuProps) => {
    if (menuTitles) {
        return (
            <>
            <CSSTransition
                in={activeMenuProp}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    {menuTitles.map((link: menuTitles) => (
                        <DropdownItem 
                            leftIcon={IconSelector(link.icon)} 
                            setActiveMenu={setActiveMenu} 
                            goToMenu={link.link}
                        >
                            {link.title}
                        </DropdownItem>
                    ))}
                </div>
            </CSSTransition>
            {subMenus.map((submenu: subMenus) => (
                <CSSTransition
                in={activeMenu === `${submenu.activeMenu}`}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem 
                        goToMenu="main" 
                        leftIcon={IconSelector(submenu.backIcon)} 
                        setActiveMenu={setActiveMenu} 
                    >
                        <h3>{submenu.menuTitle}</h3>
                    </DropdownItem>
                    {submenu.menuLinks.map(link => (
                        <DropdownItem 
                            leftIcon={IconSelector(link.icon)} 
                            subMenu={link.link}
                        >
                            {link.title}
                        </DropdownItem>
                    ))}
                </div>
                </CSSTransition>
            ))}
            </>
        )
    } else {
        return null
    }
};

export { NewMenu, useOutsideAlerter };
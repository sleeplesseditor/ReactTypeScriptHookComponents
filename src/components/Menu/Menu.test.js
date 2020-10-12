import React from 'react';
import { mount } from 'enzyme';
import Menu from './Menu';
import { MenuStructure } from './MenuHelpers';
import { ReactComponent as CaretIcon } from './Icons/caret.svg';

const dummyMenuData = {
	menuTitles: [
        {
			title: "Menu1",
			icon: "basicIcon",
			link: "menu-1"
		},
		{
			title: "Menu2",
			icon: "cubeIcon",
			link: "menu-2"
		},
    ],
    subMenus: [
        {
			activeMenu: "menu-1",
			backIcon: "arrowIcon",
			menuTitle: "Menu1",
			menuLinks: [
				{
					title: "Item1",
					icon: "lineIcon",
					link: "/"
				}
			]
		},
        {
			activeMenu: "menu-2",
			backIcon: "arrowIcon",
			menuTitle: "3D",
			menuLinks: [
				{
					title: "Item2",
					icon: "switchIcon",
					link: "/switch-graph"
				},
				{
					title: "Item3",
					icon: "mountainIcon",
					link: "/surface-plot"
				}
			]
		},
    ]
}

const setState = jest.fn();
const useStateMock = (initState) => [initState, setState];

let props = {
    activeMenu: 'menu-1',
    menuData: dummyMenuData,
    setActiveMenu: setState
}

let menuComponent;

beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    menuComponent = mount(
        <Menu title="Demo" navIcon={<CaretIcon />}>
            <MenuStructure {...props} />
        </Menu>
    )
})

afterEach(() => {
    jest.clearAllMocks();
});

describe('Menu', () => {
    it('renders the component', () => {
        expect(menuComponent).toHaveLength(1);
    })

    it('renders a main menu', () => {
        const closedMenu = menuComponent.find('.icon-button');
        closedMenu.simulate('click');
        const mainMenu = menuComponent.find('.dropdown');
        expect(mainMenu).toHaveLength(1);
    })

    it('renders a minimum of one main menu item', () => {
        const closedMenu = menuComponent.find('.icon-button');
        closedMenu.simulate('click');
        const menuItem = menuComponent.find('.menu-item');
        expect(menuItem.length).toBeGreaterThan(0);
    })

    it('renders a secondary menu', () => {
        const closedMenu = menuComponent.find('.icon-button');
        closedMenu.simulate('click');
        const menuItem = menuComponent.find('.menu-item').first();
        menuItem.simulate('click');
        const secondaryMenu = menuComponent.find('.menu-secondary');
        expect(secondaryMenu).not.toBe(null);
    })

    it('renders a minimum of one sub menu item', () => {
        const closedMenu = menuComponent.find('.icon-button');
        closedMenu.simulate('click');
        const menuItem = menuComponent.find('.menu-item').first();
        menuItem.simulate('click');
        const subMenuItem = menuComponent.find('.menu-item');
        expect(subMenuItem.length).toBeGreaterThan(0);
    })
});
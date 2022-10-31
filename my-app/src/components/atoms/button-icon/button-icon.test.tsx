/** @jest-environment jsdom */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonIcon, ButtonIconColor, ButtonIconSize } from './button-icon';

test('should match snapshot', () => {
    const {asFragment} = render(<ButtonIcon icon='icon-search' color={ButtonIconColor.PRIMARY} buttonSize={ButtonIconSize.SMALL}/>);
    expect(asFragment).toMatchInlineSnapshot(`[Function]`);
});

test('should render button-icon component', () => {
    render(<ButtonIcon icon='icon-search' color={ButtonIconColor.PRIMARY} buttonSize={ButtonIconSize.SMALL}/>);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
});

test('should fire onClick event', () => {
    const onClick = jest.fn();
    render(<ButtonIcon
        icon='icon-search'
        color={ButtonIconColor.PRIMARY}
        buttonSize={ButtonIconSize.SMALL}
        onClick={onClick}
    />);
    const element = screen.getByRole('button');
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalled();
})
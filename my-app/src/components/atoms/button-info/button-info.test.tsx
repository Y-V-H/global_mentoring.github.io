/** @jest-environment jsdom */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonInfo} from './button-info';

test('should match snapshot', () => {
    const onClick = jest.fn();
    const {asFragment} = render(<ButtonInfo onClick={onClick}/>);
    expect(asFragment).toMatchInlineSnapshot(`[Function]`);
});

test('should fire onClick event', () => {
    const onClick = jest.fn();
    render(<ButtonInfo onClick={onClick}/>);
    const element = screen.getByRole('button');
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalled();
});

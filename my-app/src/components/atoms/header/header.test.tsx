/** @jest-environment jsdom */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

test('should match snapshot', () => {
    const {asFragment} = render(<Header size='h1'>Header</Header>);
    expect(asFragment).toMatchInlineSnapshot(`[Function]`);
});

test('should have the a-header--h1 class', () => {
    render(<Header size='h1'>Header</Header>);
    const element = screen.getByText(/header/i);
    expect(element).toHaveClass('a-header--h1')
});
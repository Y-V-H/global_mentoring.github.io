// /** @jest-environment jsdom */

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Button } from './button';
import { render, screen } from '@testing-library/react';

test('should render a button', () => {
    const component = renderer.create(
        <Button />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('should render a button', () => {
    render(<Button />)
})

it('should render a button with the class of primary', () => {
    render(<Button className='a-btn__primary'/>);
    const primaryButton = screen.getByRole('button');
    expect(primaryButton).toHaveClass('a-btn__primary');
})


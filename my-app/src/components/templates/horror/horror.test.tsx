import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import { Horror } from './horror';

test('should render Comedy template', () => {
    const component = renderer.create(
        <Horror />
    );
    expect(component.toJSON()).toMatchSnapshot();
});
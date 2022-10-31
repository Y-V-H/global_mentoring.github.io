import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import { Documentary } from './documentary';

test('should render Comedy template', () => {
    const component = renderer.create(
        <Documentary />
    );
    expect(component.toJSON()).toMatchSnapshot();
});
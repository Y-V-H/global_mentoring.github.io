import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import { Crime } from './crime';

test('should render Crime template', () => {
    const component = renderer.create(
        <Crime />
    );
    expect(component.toJSON()).toMatchSnapshot();
});
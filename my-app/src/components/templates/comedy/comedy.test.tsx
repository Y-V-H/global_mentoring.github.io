import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import { Comedy } from './comedy';

test('should render Comedy template', () => {
    const component = renderer.create(
        <Comedy />
    );
    expect(component.toJSON()).toMatchSnapshot();
});
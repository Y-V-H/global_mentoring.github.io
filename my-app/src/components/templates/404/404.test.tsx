import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import { PageNotFound } from './404';

test('should render PageNotFound template', () => {
    const component = renderer.create(
        <PageNotFound />
    );
    expect(component.toJSON()).toMatchSnapshot();
});
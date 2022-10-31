import renderer from 'react-test-renderer';
import React from 'react';
import { Divider } from './divider';


test('should be render', () => {
    const component = renderer.create(
        <Divider />
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('should be render with custom class', () => {
    const component = renderer.create(
        <Divider className='test'/>
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
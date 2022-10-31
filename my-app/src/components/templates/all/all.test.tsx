import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import { AllFilms } from './all';
import { filmCards } from '../../../../assets/mock-data/film-cards'
// import { store } from '../../../toolkit-store/index';

// const filmsState = {
//     dataFilms: filmCards,
//     highlights: 'comedy'
// }
const store = {

}

// test('should render AllFilms template', () => {
//     const component = renderer.create(
//         <Provider store={store}>
//             <AllFilms dataFilms={filmCards} highlights="comedy"/>
//         </Provider>
//     );
//     expect(component.toJSON()).toMatchSnapshot();
// });
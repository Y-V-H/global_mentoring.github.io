import React from "react";

import { SearchBlock } from './components/organisms/search-block/search-block';
import { FilmsBlock } from './components/organisms/films-block/films-block';
import { FilmFullInfo } from './components/organisms/film-full-info/film-full-info';
import { useSelector  } from 'react-redux';
import { filmsDataProps } from './toolkit-store/slicer-reducer';
import './components/index.scss'

const selectFilmsData = ( state: filmsDataProps ) => state.toolkit.currentFilm;

function App() {
    const getCurrentFilmData = useSelector(selectFilmsData);

    return (
        <>
            {!!getCurrentFilmData ? <FilmFullInfo /> : <SearchBlock />}
            <FilmsBlock />
        </>
    )
}

export default App;
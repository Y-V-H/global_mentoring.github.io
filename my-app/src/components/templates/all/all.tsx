import React from 'react';
// import { Navigation } from '../../molecules/navigation/navigation';
// import { Divider } from '../../atoms/divider/divider';
import { FilmCard } from '../../molecules/film-card/film-card';
// import { SortBy } from '../../molecules/sort-by/sort-by';

// import { useSelector, useDispatch } from 'react-redux';
// import { getMoviesFetch } from '../../../toolkit-store/sort-by-slice-reducer';
import { filmsDataProps, oneFilmData } from '../../../toolkit-store/index';

// const selectFilmsData = (state: filmsDataProps) => state.sortBySlice.filmsData;

export interface AllFilmsProps {
    dataFilms: oneFilmData[];
    highlights?: string
}

const makeTitleCase = (word: string) => {
    return word
        .toLowerCase()
        .split(' ')
        .map(element => element.charAt(0).toUpperCase() + element.slice(1))
        .join(' ');
}

export const AllFilms = ({ dataFilms, highlights }: AllFilmsProps,) => {
    let highlightWord:string;
    // const dataFilms = useSelector(selectFilmsData)
    // const dispatch = useDispatch<any>();

    // useEffect(() => {
    // dispatch(getMoviesFetch())
    // }, []);

    if (!dataFilms) {
        return null;
    }

    if (highlights) {
        highlightWord = makeTitleCase(highlights)
    }

    return (
        <>
            <div className='o-films-block__search-result'>
                <span><b>{dataFilms.length}</b> movies found</span>
            </div>
            <div className='o-films-block__list'>
                {
                    dataFilms.map((item, id) => {

                        return <FilmCard
                            key={item.title}
                            className='o-films-block__list-item'
                            title={item.title}
                            year={item.release_date}
                            category={item.genres}
                            image={item.poster_path}
                            id={id}
                            filmId={item.id}
                            highlightWord={highlightWord}
                        />
                    })
                }
            </div>
        </>
    )
}
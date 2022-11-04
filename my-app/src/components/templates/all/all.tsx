import React from 'react';
import { FilmCard } from '../../molecules/film-card/film-card';
import { oneFilmData } from '../../../toolkit-store/index';

interface AllFilmsProps {
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
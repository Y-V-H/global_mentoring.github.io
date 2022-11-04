import React from 'react';
import { Header } from '../../atoms/header/header';
import { clsx } from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentFilmData } from '../../../toolkit-store/sort-by-slice-reducer';
import { filmsDataProps } from '../../../toolkit-store/index';
import Link from 'next/link';
import Highlighter from "react-highlight-words";

interface FilmCardProps {
    title: string;
    year: string;
    category: string[];
    image: string;
    id: number;
    filmId: number;
    className?: string;
    highlightWord?: string
}

const selectFilmsData = (state: filmsDataProps) => state.sortBySlice.filmsData;

export const FilmCard = ({
    title,
    year,
    category,
    image,
    id,
    className,
    filmId,
    highlightWord
}: FilmCardProps) => {
    const dispatch = useDispatch();
    const getFilmsData = useSelector(selectFilmsData);
    const categoryFullName = category.toString().replace(/,/g, ' ');

    const handlerClick = () => {
        dispatch(updateCurrentFilmData(getFilmsData[id]));
    };

    const innerElement = () => <Highlighter
        highlightClassName='YourHighlightClass'
        searchWords={[highlightWord]}
        className='m-film-card__caption-category'
        autoEscape={true}
        textToHighlight={categoryFullName}
    />

    return (
        <Link href={`/movies/${filmId}`} className="m-film-card">
            <figure className={clsx(className)} onClick={handlerClick}>
                <div className='m-film-card__img-wr'>
                    <img className='m-film-card__img' src={`${image}`} />
                </div>
                <figcaption className='m-film-card__caption'>
                    <Header size='h3' className='m-film-card__caption-title'>{title}</Header>
                    <span className='m-film-card__caption-year'>{year}</span>
                    {highlightWord ? innerElement() : <span className='m-film-card__caption-category'>{categoryFullName}</span>}
                </figcaption>
            </figure>
        </Link>
    )
}
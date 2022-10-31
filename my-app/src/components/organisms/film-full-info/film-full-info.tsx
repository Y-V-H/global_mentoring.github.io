import React from 'react';
import { Header } from '../../atoms/header/header';
import { ButtonIcon } from '../../atoms/button-icon/button-icon';
import { ButtonIconColor, ButtonIconSize } from '../../atoms/button-icon/button-icon';
import { Logo } from '../../atoms/logo/logo';
import { filmsDataProps } from '../../../toolkit-store/index';
import { updateCurrentFilmData } from '../../../toolkit-store/sort-by-slice-reducer'; 
import { useDispatch, useSelector  } from 'react-redux';

const selectCurrentFilmData = (state: filmsDataProps) => state.sortBySlice.currentFilm;

export const FilmFullInfo = () => {
    const currentFilmData = useSelector(selectCurrentFilmData);
    const dispatch = useDispatch();

    const handlerClickOnLogo = () => dispatch(updateCurrentFilmData(null));

    return (
        <div className="container o-film-info">
            <div className="o-film-info__header">
                <Logo onClick={handlerClickOnLogo}/>
                <ButtonIcon
                    icon='icon-search'
                    color={ButtonIconColor.PRIMARY}
                    buttonSize={ButtonIconSize.MEDIUM}
                />
            </div>
            <div className="o-film-info__wr">
                <div className="o-film-info__img">
                    <img src={currentFilmData.poster_path} alt="" />
                </div>
                <div className="o-film-info__details">
                    <div className="o-film-info__details-header">
                        <Header size='h1'>{currentFilmData.title}</Header>
                        <span className='o-film-info__details-rating'>{currentFilmData.vote_average}</span>
                        <span className='o-film-info__details-award'>{currentFilmData.tagline}</span>
                    </div>
                    <div className="o-film-info__details-date">
                        <span>{currentFilmData.release_date}</span>
                        <span>{currentFilmData.runtime} min</span>
                    </div>
                    <div className="o-film-info__details-description">
                        <p>{currentFilmData.overview}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
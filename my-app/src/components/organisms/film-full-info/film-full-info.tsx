import React from 'react';
import { Header } from '../../atoms/header/header';

export const FilmFullInfo = ({movieInfo}: any) => {
    if (!movieInfo) {
        return <h1>Film was not found!</h1>
    }

    return (
        <div className="container o-film-info">
            <div className="o-film-info__wr">
                <div className="o-film-info__img">
                    <img src={movieInfo.poster_path} alt="" />
                </div>
                <div className="o-film-info__details">
                    <div className="o-film-info__details-header">
                        <Header size='h1'>{movieInfo.title}</Header>
                        <span className='o-film-info__details-rating'>{movieInfo.vote_average}</span>
                        <span className='o-film-info__details-award'>{movieInfo.tagline}</span>
                    </div>
                    <div className="o-film-info__details-date">
                        <span>{movieInfo.release_date}</span>
                        <span>{movieInfo.runtime} min</span>
                    </div>
                    <div className="o-film-info__details-description">
                        <p>{movieInfo.overview}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
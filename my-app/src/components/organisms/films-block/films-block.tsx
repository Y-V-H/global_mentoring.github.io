import React, {useEffect, useState} from 'react';
import { Divider } from '../../atoms/divider/divider';
import { SortBy } from '../../molecules/sort-by/sort-by';
import { Routes, Route, NavLink, useSearchParams, useParams, useLocation } from 'react-router-dom';
import { searchFilm } from '../../../utils/searc-film';
import { Comedy } from '../../templates/comedy/comedy';
import { Crime } from '../../templates/crime/crime';
import { Documentary } from '../../templates/documentary/documentary';
import { Horror } from '../../templates/horror/horror';
import { AllFilms } from '../../templates/all/all';
import { PageNotFound } from '../../templates/404/404';

const navItems = [
    { title: 'all', active: false },
    { title: 'documentary', active: false },
    { title: 'comedy', active: false },
    { title: 'Horror', active: false },
    { title: 'crime', active: false }
]

const useQuery = () => new URLSearchParams(useLocation().search);

export const FilmsBlock = () => {
    const [filmsState, setFilmsState ] = useState();
    const searchQuery = useQuery();
    const location = useLocation()
    // const filmTitle = searchQuery.get('movie');
    // const searchByFilmTitle = filmTitle ? `movie=${filmTitle}` : null;

    const genreType = searchQuery.get('genre');
    const searchByGenre = genreType ? `&genre=${genreType}` : null;

    const searchBy = searchQuery.get('searchBy');
    const searchSearchBy = searchBy ? `&searchBy=${searchBy}` : null;

    const sortBy = searchQuery.get('sortBy');
    const searchSortBy = sortBy ? `&sortBy=${sortBy}` : null;
    
    const sortOrder = searchQuery.get('sortOrder');
    const searchSortOrder = sortOrder ? `&sortOrder=${sortOrder}` : null;


    useEffect( () => {
        if (genreType || sortBy || searchBy || sortOrder){
            searchFilm(searchByGenre, searchSearchBy, searchSortBy, searchSortOrder)
                        .then(res =>{
                            const data = res.data;
                            setFilmsState(data)
                        })  
        } else if (location.pathname === '/'){
            fetch(process.env.filmAPI)
                .then(res => res.json())
                .then(res => {
                    const data = res.data;
                    setFilmsState(data);
                })
        }
    },[genreType, sortBy, searchSortOrder, sortOrder, location])

    return (
        <main className="container o-films-block">
            <div className="o-films-block__header">
                <nav className='m-navigation'>
                    <ul className='m-navigation__block'>
                        {navItems.map((item, id) => {
                            return <li key={id} className='m-navigation__item' >
                                <NavLink
                                    end
                                    to={`/${item.title === 'all' ? '' : item.title}`}
                                    className={({ isActive }) => `a-link  m-navigation__link ${isActive ? 'm-navigation__link--active' : ''}`}
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </nav >
                <SortBy />
            </div>
            <Divider className='o-films-block__divider' />

            <Routes>
                <Route path="/" element={<AllFilms dataFilms={filmsState} highlights={genreType}/>} />
                <Route path="/comedy" element={<Comedy />} />
                <Route path="/crime" element={<Crime />} />
                <Route path="/documentary" element={<Documentary />} />
                <Route path="/horror" element={<Horror />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </main>
    )
}
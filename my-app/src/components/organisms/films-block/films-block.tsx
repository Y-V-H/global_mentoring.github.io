import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import { Divider } from '../../atoms/divider/divider';
import { SortBy } from '../../molecules/sort-by/sort-by';
// import { Routes, Route, NavLink, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { searchFilmByGenre } from '../../../utils/searc-film';
import { Comedy } from '../../templates/comedy/comedy';
import { Crime } from '../../templates/crime/crime';
import { Documentary } from '../../templates/documentary/documentary';
import { Horror } from '../../templates/horror/horror';
import { AllFilms } from '../../templates/all/all';
import { PageNotFound } from '../../templates/404/404';

const navItems = [
    { title: 'all', active: false.valueOf, path: '/search' },
    { title: 'documentary', active: false, path: '/documentary' },
    { title: 'comedy', active: false, path: '/comedy' },
    { title: 'Horror', active: false, path: '/horror' },
    { title: 'crime', active: false, path: '/crime' }
]

// export const getStaticProps = async () => {
//     const response = await fetch('http://localhost:4000/movies');
//     const data = await response.json();
// console.log(data, "data");
//     return {
//         props: {movies: data}
//     }
//   }

// export async function getServerSideProps(context: any) {
//     const response = await fetch('http://localhost:4000/movies');
//     const data = await response.json();

//     return {
//         props: {data: data}, // will be passed to the page component as props
//     }
// }

export const FilmsBlock = ({ data }: any) => {
    const [filmsState, setFilmsState] = useState();
    const [genreType, setGenreType] = useState('');
    const [sortByData, setSortByData] = useState<{ value: '', label: '' }>();
    const [genreQueryParams, setGenreQueryParams] = useState('');
    const [sortByQueryParams, setSortByQueryParams] = useState('');
    // const location = useLocation();
    // const navigate = useNavigate();

    const genreForQuery = false;
    // = navItems.filter(item => {
    //     return item.path === location.pathname && item.path !== '/search'
    // });

    const initialFetch = async () => {
        // const response = await fetch(`${process.env.APP_MOVIE_API}`);
        // const response = await fetch('http://localhost:4000/movies');
        // const data = await response.json()
        
        // setFilmsState(data.data);
    }
    // console.log(typeof(process.env.APP_MOVIE_API), '1111111111111111111111111111')


    useEffect(() => {
        initialFetch();
    }, []);
    // console.log(process.env.APP_MOVIE_API, "APP_MOVIE_API")
    // console.log(process.env.DB_HOST, "DB_HOST")

    useEffect(() => {
        let genre = { genre: '' };

        // if (!!genreForQuery.length) {
        //     genre.genre = genreForQuery[0].path;
        //     const requestParams = queryString.stringify(genre);
        //     const redirectUrl = `/search?${requestParams}&${sortByQueryParams}`;
            
        //     setGenreQueryParams(requestParams);
        //     setGenreType(genreForQuery[0].title);
        //     searchFilmByGenre(genreType)
        //         .then(res => {
        //             const data = res.data;
        //             setFilmsState(data);
        //         });
        //     // navigate(redirectUrl);
        // }
        // else if (location.pathname === '/search' && location.search === '') {
        //     initialFetch();
        // }
    // }, [location]);
    }, []);

    // useEffect(() => {
    //     const sortByValue = sortByData ? sortByData?.value : '';

    //     if (sortByValue) {
    //         const sortByRequestData = {
    //             sortBy: sortByValue
    //         };
    //         const requestParams = queryString.stringify(sortByRequestData);
    //         const redirectUrl = `/search?${requestParams}&${genreQueryParams}`;

    //         setSortByQueryParams(requestParams)
    //         searchFilmByGenre(genreType, sortByValue)
    //             .then(res => {
    //                 const data = res.data;
    //                 setFilmsState(data);
    //             });

    //         // navigate(redirectUrl);
    //     }
    // }, [sortByData]);

    return (
        <main className="container o-films-block">
            <div className="o-films-block__header">
                <nav className='m-navigation'>
                    <ul className='m-navigation__block'>
                        {navItems.map((item, id) => {
                            return <li key={id} className='m-navigation__item' >
                                {/* <NavLink
                                    end
                                    to={item.path}
                                    className={({ isActive }) => `a-link  m-navigation__link ${isActive ? 'm-navigation__link--active' : ''}`}
                                >
                                    {item.title}
                                </NavLink> */}
                            </li>
                        })}
                    </ul>
                </nav >
                {/* <SortBy handler={setSortByData} /> */}
            </div>
            <Divider className='o-films-block__divider' />

            {/* <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/search" replace />}
                />
                <Route path="/search" element={<AllFilms dataFilms={filmsState} highlights={genreType} />} />
                <Route path="/comedy" element={<Comedy />} />
                <Route path="/crime" element={<Crime />} />
                <Route path="/documentary" element={<Documentary />} />
                <Route path="/horror" element={<Horror />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes> */}
            <AllFilms dataFilms={data} highlights={genreType} />
        </main>
    )
}
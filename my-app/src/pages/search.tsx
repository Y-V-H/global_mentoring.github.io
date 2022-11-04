import React, { useEffect, useState } from 'react';
import { Divider } from '../components/atoms/divider/divider';
import { SortBy } from '../components/molecules/sort-by/sort-by';
import { searchFilmByGenre } from '../utils/searc-film';
import { AllFilms } from '../components/templates/all/all';
import { useRouter } from 'next/router';

const navItems = [
    { title: 'all', active: false.valueOf, path: '/search' },
    { title: 'documentary', active: false, path: '/documentary' },
    { title: 'comedy', active: false, path: '/comedy' },
    { title: 'Horror', active: false, path: '/horror' },
    { title: 'crime', active: false, path: '/crime' }
];

export async function getServerSideProps() {
    const response = await fetch(process.env.APP_MOVIE_API);
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {movies: data.data}, 
    }
}

const Search = ({movies}: any) => {
    const [filmsState, setFilmsState] = useState(movies);
    const [genreType, setGenreType] = useState('');
    const [currentLinkPathName, setCurrentLinkPathName] = useState('');
    const [sortByData, setSortByData] = useState<{ value: '', label: '' }>();
    const router = useRouter();

    const genreForQuery = navItems.filter(item => {
        return item.path === currentLinkPathName && item.path !== '/search'
    });

    const handlerNavLinkClick = (event: any) => {
        event.preventDefault();
        const linkPathName = event.target.getAttribute('href');
        
        setCurrentLinkPathName(linkPathName)
    };

    const addParamsToURL = (genreType: string, sortByValue: {value: string; label: string}) => {
        if (!!genreType){
            router.query.genre = genreType;
        }
        if (!!sortByValue) {
            router.query.sortby = sortByValue.value;
        }

        router.push(router);
    }

    useEffect(() => {
        if (!!genreForQuery.length) {
            setGenreType(genreForQuery[0].title);
            searchFilmByGenre(genreForQuery[0].title)
                .then(res => {
                    const data = res.data;
                    setFilmsState(data);
                });
            addParamsToURL(genreForQuery[0].title, sortByData);
            
        }
        else if (currentLinkPathName === '/search') {
            router.push('/search');
        }
    }, [currentLinkPathName]);

    useEffect(() => {
        const sortByValue = sortByData ? sortByData?.value : '';

        if (sortByValue) {
            searchFilmByGenre(genreType, sortByValue)
                .then(res => {
                    const data = res.data;
                    setFilmsState(data);
                });

            addParamsToURL(genreType, sortByData)
        }
    }, [sortByData]);

    return (
        <main className="container o-films-block">
            <div className="o-films-block__header">
                <nav className='m-navigation'>
                    <ul className='m-navigation__block'>
                        {navItems.map((item, id) => {
                            return <li key={id} className='m-navigation__item' >
                                <a
                                    href={item.path}
                                    className='a-link  m-navigation__link'
                                    onClick={handlerNavLinkClick}
                                >
                                    {item.title}
                                </a>
                            </li>
                        })}
                    </ul>
                </nav >
                <SortBy handler={setSortByData} />
            </div>
            <Divider className='o-films-block__divider' />
            <AllFilms dataFilms={filmsState} highlights={genreType} />
        </main>
    )
}

export default Search;
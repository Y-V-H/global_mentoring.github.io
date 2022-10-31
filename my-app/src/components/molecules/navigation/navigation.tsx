import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Comedy } from '../../templates/comedy/comedy';
import { Crime } from '../../templates/crime/crime';
import { Documentary } from '../../templates/documentary/documentary';
import { Horror } from '../../templates/horror/horror';
// import { AllFilms } from '../../templates/all/all';

const navItems = [
    { title: 'all', active: false },
    { title: 'documentary', active: true },
    { title: 'comedy', active: false },
    { title: 'Horror', active: false },
    { title: 'crime', active: false }
]

export const Navigation = () => {
    return (
        <>        
            <nav className='m-navigation'>
                <ul className='m-navigation__block'>
                    {navItems.map((item, id) => {
                        return <li key={id} className='m-navigation__item' >
                            <Link
                                to={`/${item.title === 'all' ? '' : item.title  }`}
                                className={`a-link  m-navigation__link ${item.active ? 'm-navigation__link--active' : ''}`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    })}
                </ul>
            </nav >
            {/* <Route path="/" element={} /> */}
            {/* <Routes>

                <Route path="/" element={<AllFilms />} />
                <Route path="/comedy" element={<Comedy />} /> 
                <Route path="/crime" element={<Crime />} />
                <Route path="/documentary" element={<Documentary />} />
                <Route path="/horror" element={<Horror /> } />
                <Route path="*" element={<Horror /> } />
            </Routes> */}
        </>
    )
} 

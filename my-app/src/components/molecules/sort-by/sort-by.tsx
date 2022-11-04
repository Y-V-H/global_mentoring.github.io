import React from "react";
import { CustomSelect } from '../custom-select/custom-select'

const options = [
    {value: 'rating', label: 'Rating'},
    {value: 'genre', label: 'Genre'},
    {value: 'release date', label: 'Release date'}
]

export const SortBy = ({handler}: any) => {

    return (
        <div className="m-sort-by">
            <span className="m-sort-by__text">SORT BY</span>
            <CustomSelect handleChange={handler} options={options}/>
        </div>
    )
} 
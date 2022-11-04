import React, { useState } from 'react';
import { useFormik, FormikErrors, FormikProvider } from 'formik';
import { InputText } from '../../atoms/input-text/input-text';
import { Textarea } from '../../atoms/textarea/textarea';
import { Button } from '../../atoms/button/button';
import { CustomSelect } from '../../molecules/custom-select/custom-select';
import { ServerErrorMessage } from '../../molecules/server-error-message/server-error-message';
import { useDispatch, useSelector } from 'react-redux';
import { filmsDataProps } from '../../../toolkit-store/index';
import { addNewFilmToState } from '../../../toolkit-store/sort-by-slice-reducer';

const genreOptions = [
    {value: 'Comedy', label: 'Comedy', id: 'genres'},
    {value: 'Drama', label: 'Drama', id: 'genres'},
    {value: 'Romance', label: 'Romance', id: 'genres'},
]

interface validateProps {
    title: string;
    poster_path: string;
    genre: string;
    release_date: number;
    vote_average: number;
}

const validate = ( values: any) => {
    const errors: FormikErrors<validateProps> = {};
    
    if (values.title.length < 3) {
        errors.title = 'Must be 3 characters or more';
    }
  
    if (values.poster_path.indexOf("http://") == 0 || values.poster_path.indexOf("https://")) {
        errors.poster_path = 'Should contained https://';
    }

    if(values.release_date < 9) {
        errors.release_date = 'Format should be YYYY-MM-DD' 
    }

    if(values.vote_average === 0) {
        errors.vote_average = 'Required' 
    }

    return errors;
};

const selectFilmsData = ( state: filmsDataProps ) => state.sortBySlice.filmsData;

export const AddMovieForm = ({updateObject, toggleModalState}: any) => {
    const dispatch = useDispatch();
    const stateFilmsArray = useSelector(selectFilmsData);
    const [serverError, setServerError] = useState(null)
    const initValueObj = updateObject ? updateObject : {
        title: '',
        poster_path: '',
        genres: '',
        release_date: '',
        vote_average: 0,
        runtime: 0,
        overview: ''
    };
    const formik = useFormik({
        initialValues: initValueObj,
        validate,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: ( values, { setSubmitting }) => {
            const requestOptions = {
                method: !!updateObject ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formik.values)
            };

            setSubmitting(false);
            fetch(process.env.filmAPI, requestOptions)
                .then(async response => {
                    const data = await response.json();
                   
                    if (!response.ok) {
                        const error = (data && data.message) || response.status;

                        setServerError(data.messages);
    
                        return Promise.reject(error);
                    }
                    toggleModalState();
                    dispatch(addNewFilmToState([...stateFilmsArray, formik.values]));
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        },
    });
    const resetHandler = () => {
        formik.resetForm({
            values: initValueObj,
        })
    }
    const formikHandlerNumberInput = (e: React.ChangeEvent<HTMLInputElement>, onlyNumber: boolean ) => {
        const inputId = e.currentTarget.id;

        if(onlyNumber) {
            const re = new RegExp('^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$');

            if(e.target.value.trim() != '' || re.test(e.target.value)) {
                const size = parseInt(e.target.value);

                formik.setFieldValue(inputId,size)
            }
        } else {
            formik.setFieldValue(inputId, e.target.value)
        }
    }
    const selectHandler = (selectOption: {value: string, label: string, id: string}) => {
        const value = [];
            
        value.push(selectOption.value);
        formik.setFieldValue(selectOption.id, value)
    }

    return <FormikProvider value={formik}> 
        <ServerErrorMessage message={serverError}/>
        <form className="o-add-movie__form" onSubmit={formik.handleSubmit}>
            <div className="o-add-movie__form-inputs-wr">
                <div className="o-add-movie__form-inputs-left-col">
                    <InputText
                        label="title"
                        placeholder="Moana"
                        formikValue={formik.values.title}
                        formikHandlerChange={formikHandlerNumberInput}
                        formikError={formik.errors.title}
                    />
                    <InputText
                        label='poster path'
                        placeholder="https://"
                        formikValue={formik.values.poster_path}
                        formikHandlerChange={formikHandlerNumberInput}
                        formikError={formik.errors.poster_path}
                    />
                    <CustomSelect
                        label="genres"
                        handleChange={selectHandler}
                        options={genreOptions}
                        isTransparentBackground
                    />
                </div>
                <div className="o-add-movie__form-inputs-right-col">
                    <InputText
                        label='release date'
                        placeholder="YYYY-MM-DD"
                        formikValue={formik.values.release_date}
                        formikHandlerChange={formikHandlerNumberInput}
                        formikError={formik.errors.release_date}
                    />
                    <InputText
                        label='vote average'
                        onlyNumber
                        placeholder="7.7"
                        formikValue={formik.values.vote_average}
                        formikHandlerChange={formikHandlerNumberInput}
                        formikError={formik.errors.vote_average}
                    />
                    <InputText
                        label='runtime'
                        onlyNumber
                        placeholder="minutes"
                        formikValue={formik.values.runtime}
                        formikHandlerChange={formikHandlerNumberInput}
                    />
                </div>
            </div>
            <Textarea
                className="o-add-movie__form"
                label="overview"
                placeholder="Movie description"
                onChange={formik.handleChange}
                formikValue={formik.values.overview}
            />
            <div className="o-add-movie__form-buttons">
                <Button className="a-btn__primary" onClick={resetHandler} >reset</Button>
                <Button className="a-btn__secondary" type="submit">submit</Button>
            </div>
        </form>
    </FormikProvider>
}
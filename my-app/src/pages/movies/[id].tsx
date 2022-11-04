import { FilmFullInfo } from '../../components/organisms/film-full-info/film-full-info';

export async function getServerSideProps(context: any)  {
    const {resolvedUrl} = context;
    const response = await fetch(`http://localhost:4000${resolvedUrl}`);
    const data = await response.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {movie: data}
    }
}

const Movie = ({movie}: any) => {
    return (
        <>
            <FilmFullInfo movieInfo={movie}/>
        </>
    )

};

export default Movie;
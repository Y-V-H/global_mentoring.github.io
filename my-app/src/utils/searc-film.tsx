export const searchFilmByGenre = async (filter?: string, sortBy?: string) => {
    
    const response = await fetch(`http://localhost:4000/movies?sortOrder=desc
                                ${filter ? `&searchBy=genre` : ''}
                                ${filter ? `&filter=${filter}` : ''}
                                ${sortBy ? `&sortBy=${sortBy}` : ''}
                                `);

    return await response.json()
}
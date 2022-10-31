export const searchFilm = async (genre?: string, searchBy?: string, sortBy?: string, sortOrder?: string) => {
    const response = await fetch(`${process.env.filmAPI}` + '?'+ `
                                ${genre ? genre : ''}
                                ${searchBy ? searchBy : ''}
                                ${sortBy ? sortBy : ''}
                                ${sortOrder ? sortOrder : ''}
                                `)
    return await response.json()
}
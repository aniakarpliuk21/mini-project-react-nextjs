import React from 'react';
import {movieService} from "@/services/api.services";
import MovieList from "@/components/movieList/MovieList";
type Params = {
    id:string | number;
}
const GenrePage = async ({params}:{params:Params}) => {
    const moviesWithGenres = await movieService.getMoviesByGenreId(params.id);
    const movies = moviesWithGenres.results;
    return (
        <div>
            <MovieList movies={movies}/>
        </div>
    );
};

export default GenrePage;
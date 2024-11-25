import React, {FC} from 'react';
import {movieService} from "@/services/api.services";
import MovieList from "@/components/movieList/MovieList";
import PaginationComponent from "@/components/pagination/PaginationConponent";

type SearchParams = { [key: string]: string | string[] | undefined };

type MyProps = {
    searchParams: SearchParams;
}

const MoviesPage: FC<MyProps> = async ({ searchParams }) => {
    const page = searchParams.page ? (Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page) : '1';
    const res = await movieService.getMovies(+page);
    const movies = res.results;



    return (
        <div>
            <MovieList movies={movies} />
            <PaginationComponent totalPages={res.total_pages}/>
        </div>
    );
};

export default MoviesPage;
import React, {FC} from 'react';
import MovieListCard from "@/components/movieListCard/MovieListCard";
import styles from './Movies.module.css'
import {IMovieById} from "@/models/IMovieById";
type TypeProps = {
    movies:IMovieById[];
}
const MovieList:FC<TypeProps> = ({movies}) => {
    return (
        <div className={styles.movies}>
            {movies.map((movie) => <MovieListCard movie={movie} key={movie.id} />)}
        </div>
    );
};

export default MovieList;
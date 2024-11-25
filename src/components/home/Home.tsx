import React  from 'react';
import {movieService} from "@/services/api.services";
import MovieList from "@/components/movieList/MovieList";
import styles from './Home.module.css'
import Form from "@/components/form/Form";

const HomeComponent = async() => {
    const topMovies = await movieService.topMovie()
    const movies = topMovies.results
    return (
        <div className={styles.home}>
            <Form/>
            <h1>Top Rating</h1>
            <MovieList movies={movies}/>
        </div>
    );
};

export default HomeComponent;
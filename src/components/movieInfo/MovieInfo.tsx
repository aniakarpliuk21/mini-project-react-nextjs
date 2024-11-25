import React, {FC} from 'react';
import styles from './MovieInfo.module.css';
import PosterPreview from "@/components/posterPreview/PosterPreview";
import StarsRating from "@/components/starsRating/StarsRating";
import GenreBadge from "@/components/genreBadge/GenreBadge";
import {IMovieById} from "@/models/IMovieById";


type TypeProps = {
    movie:IMovieById
}
const MovieInfo:FC<TypeProps> = ({movie}) => {
    return (
        <div className={styles.movieInfo}>
            <h1>{movie.title}</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.posterContainer}>
                    <PosterPreview movie={movie}/>
                </div>
                <div className={styles.details}>
                    <ul className={styles.movieDetails}>
                        <li><strong>Overview:</strong> {movie.overview}</li>
                        <li><strong>Release date:</strong> {movie.release_date}</li>
                        <li><strong>Popularity:</strong> {movie.popularity}</li>
                        <li><strong>Original language :</strong> {movie.original_language}</li>
                        <li><strong>Genres :</strong><GenreBadge key={movie.id} movieGenres={movie.genres}/></li>
                    </ul>
                    <StarsRating movie={movie}/>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
import React, {FC} from 'react';
import PosterPreview from "@/components/posterPreview/PosterPreview";
import StarsRating from "@/components/starsRating/StarsRating";
import styles from './MovieList.module.css';
import Link from "next/link";
import {IMovieById} from "@/models/IMovieById";

type TypeProps = {
    movie:IMovieById
}
const MovieListCard:FC<TypeProps> = ({movie}) => {
    return (
        <div className={styles.movie}>
            <Link href={'/movies/' + movie.id}><PosterPreview movie={movie}/></Link>
            <div className={styles.details}>
                <h3 className={styles.title}>{movie.title}</h3>
                <div className={styles.info}>
                    <StarsRating movie={movie}/>
                    <span className={styles.releaseDate}> | {movie.release_date}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieListCard;
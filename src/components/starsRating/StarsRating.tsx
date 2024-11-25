import React, {FC} from 'react';
import style from './StarRating.module.css'
import {IMovieById} from "@/models/IMovieById";
type TypeProps = {
    movie:IMovieById
}
const StarsRating:FC<TypeProps> = ({movie}) => {
    const rating = Math.floor(movie.vote_average)
    return (
        <div>
            <div className={style.rating}>
                {[...Array(10)].map((_, i) => (
                    <span
                        key={i}
                        className={`${style.star} ${i < rating ? style.selected : ''}`}
                    >
                    ★
                </span>
                ))}
            </div>
            <span>{movie.vote_average}</span>
        </div>
    );
};

export default StarsRating;
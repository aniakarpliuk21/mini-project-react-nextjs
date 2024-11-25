import React, {FC} from 'react';
import {IMovieById} from "@/models/IMovieById";
type TypeProps = {
    movie:IMovieById
}
const PosterPreview:FC<TypeProps> = ({movie}) => {
    const image = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    return (
        <div>
            <img src={image} alt={movie.title}/>
        </div>
    );
};

export default PosterPreview;
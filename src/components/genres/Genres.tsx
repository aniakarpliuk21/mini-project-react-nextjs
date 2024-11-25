import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import Genre from "@/components/genre/Genre";
import styles from './Genres.module.css'
type TypeProps = {
    genres:IGenre[];
}
const Genres:FC<TypeProps> = ({genres}) => {
    return (
        <div className={`${styles.genres} goldFlexWrap`}>
            {
                genres.map((genre) => <Genre genre={genre} key={genre.id} />)
            }
        </div>
    );
};

export default Genres;
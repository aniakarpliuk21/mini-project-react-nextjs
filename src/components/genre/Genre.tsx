import React, {FC} from 'react';
import {IGenre} from "@/models/IGenre";
import styles from './Genre.module.css';
import Link from "next/link";

type TypeProps = {
    genre:IGenre
}
const Genre:FC<TypeProps> = ({genre}) => {
    return (
        <div className={`${styles.genre} goldFlexWrap`}>
            <Link href={'/genres/' + genre.id} >{genre.name}</Link>
        </div>
    );
};

export default Genre;
import React,{FC} from "react";
import {IGenre} from "@/models/IGenre";
import Genre from "@/components/genre/Genre";

type TypeProps = {
    movieGenres:IGenre[]
}
const GenreBadge:FC<TypeProps> = ({movieGenres}) => {
    return (
        <div className={'goldFlexWrap'}>
            {
                movieGenres?.map((genre) => <Genre key={genre.id} genre={genre} />)
            }
        </div>
    );
};

export default GenreBadge;
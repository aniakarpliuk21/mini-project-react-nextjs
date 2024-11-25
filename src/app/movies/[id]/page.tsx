import React from "react";
import {movieService} from "@/services/api.services";
import MovieInfo from "@/components/movieInfo/MovieInfo";

type Params = {
    id:string | number;
}
const MoviePage = async ({params}:{params:Params}) => {
   const movie = await movieService.getMovieById(params.id);
    return (
        <div>
            <MovieInfo movie={movie}/>
        </div>
    );
};

export default MoviePage;

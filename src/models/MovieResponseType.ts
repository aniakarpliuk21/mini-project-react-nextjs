
import {IMovieById} from "@/models/IMovieById";

export type MovieResponseType = {
    page:number,
    results:IMovieById[],
    total_pages:number,
    total_results:number
}
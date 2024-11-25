import {MovieResponseType} from "@/models/MovieResponseType";
import {accessTokenAuth, urlsBuilder} from "@/constans/Urls";
import {IUser} from "@/models/IUser";
import {GenresResponceType} from "@/models/GenresResponceType";
import {IMovieById} from "@/models/IMovieById";
import {ISearchResult} from "@/models/ISearchResult";

const headers = {
    method: 'GET',
    headers:{
        Accept: 'application/json',
        Authorization: `Bearer ${accessTokenAuth}`,
    }
}
const movieService = {
    getMovies : async (page:number):Promise<MovieResponseType> => {
      return (await fetch(urlsBuilder.movie.allMovies(page),headers)
            .then(value => value.json()))
    },
    getMoviesByGenreId : async (id:number | string):Promise<MovieResponseType> => {
        return ( await fetch(urlsBuilder.movie.moviesByGenresId(id),headers)
            .then(value => value.json()))
    },
    getMovieById :async (id:number | string):Promise<IMovieById> => {
        return (await fetch(urlsBuilder.movie.movieById(id),headers)
        .then(value => value.json()))
    },
    topMovie : async ():Promise<MovieResponseType> => {
        return ( await fetch(urlsBuilder.movie.topMovies(), headers)
            .then(value => value.json()))
    },
    searchMovies : async (query:string):Promise<ISearchResult[]> => {
        const movies = await fetch(urlsBuilder.movie.moviesSearch(query),headers)
            .then(value => value.json())
        return movies.results;
    }
}
const genresService = {
    getGenres : async ():Promise<GenresResponceType> => {
        return (await fetch(urlsBuilder.genres.allGenres(),headers)
            .then(value => value.json()))
    }
}

const userService = {
    getUser : async ():Promise<IUser> => {
        return (await fetch(urlsBuilder.user.userBase(),headers)
            .then(value => value.json()))
    }

}

export {
    movieService,
    genresService,
    userService
}
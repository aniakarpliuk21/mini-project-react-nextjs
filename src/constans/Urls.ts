const baseUrl = 'https://api.themoviedb.org/3';
const accessTokenAuth = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjQzOWYxNWU0MzczNjdiMWVjZWI3NzllNDkzYzE3NiIsIm5iZiI6MTczMjEwNTM5MS42NzIxMDAzLCJzdWIiOiI2NjcwMjJiMTJjMWU0Y2NmZDkxOTI2YzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wncuA_aIearNtstY1Xh1_bXsC13q3RMfAqQdTqUdNm0'
const accountId = '21332617'
const urlsBuilder = {
    movie : {
        moviesBaseUrl: '/discover/movie',
        allMovies:(page:number) => baseUrl +urlsBuilder.movie.moviesBaseUrl + '?page=' + page,
        movieById:(id:string | number) => baseUrl + '/movie/' + id,
        moviesByGenresId :(id:string | number)=> baseUrl + urlsBuilder.movie.moviesBaseUrl + '?with_genres=' + id,
        topMovies: () =>baseUrl + '/movie/top_rated',
        moviesSearch:(query:string) => baseUrl + '/search/keyword?query=' + query
    },
    genres : {
        genresBaseUrl:'/genre/movie/list',
        allGenres:() => baseUrl +urlsBuilder.genres.genresBaseUrl
    },
    user :{
        userBaseUrl:'/account',
        userBase:() => baseUrl + urlsBuilder.user.userBaseUrl + '/' +accountId
    }
}


export {
    baseUrl,
    accessTokenAuth,
    urlsBuilder
}
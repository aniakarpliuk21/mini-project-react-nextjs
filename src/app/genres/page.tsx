import React from 'react';
import {genresService} from "@/services/api.services";
import Genres from "@/components/genres/Genres";

const GenresPage = async () => {
    const res = await genresService.getGenres();
    const genres = res.genres

    return (
        <div>
            <Genres genres={genres} />
        </div>
    );
};

export default GenresPage;
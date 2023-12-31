import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (builder) => ({
        // Get Genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`
        }),

        // Get Movies by [Type]
        getMovies: builder.query({
            query: ({genreIdOrCategoryName, page, searchQuery}) => {
                // Get movies by search
                if(searchQuery) {
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
                }
                
                // Get movies by category
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`
                }
                // Get movies by Genre
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
                }
                // Get Popular Movies
                return `movie/popular?&page=${page}&api_key=${tmdbApiKey}`;
            },
        }),

        // Get Movie
        getMovie: builder.query({
            query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
        }),

        getList: builder.query({
            query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?session_id=${sessionId}&page=${page}&api_key=${tmdbApiKey}`
        }),

        // Get user specific lists
        getRecommendations: builder.query({
            query: ({movie_id, list}) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
        }),

        getActorsDetails: builder.query({
            query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
        }),

        getMoviesByActorId: builder.query({
            query: ({id, page}) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`
        })
    }),
});

export const {
    useGetGenresQuery,
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetListQuery,
    useGetRecommendationsQuery,
    useGetActorsDetailsQuery,
    useGetMoviesByActorIdQuery,
} = tmdbApi;
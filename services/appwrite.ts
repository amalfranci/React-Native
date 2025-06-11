import { fetchMovies } from "./api";

export const getTrendingMovies = async () => {
    const movies = await fetchMovies({ query: "" });
    return movies.slice(0, 5).map(movie => ({
        searchTerm: movie.title,
        movie_id: movie.id,
        title: movie.title,
        count: movie.vote_count,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }));
}; 
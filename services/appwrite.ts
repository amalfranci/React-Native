import { fetchMovies } from "./api";

export const getTrendingMovies = async () => {
    const movies = await fetchMovies({ query: "" });
    return movies.slice(0, 5); // Return top 5 trending movies
}; 
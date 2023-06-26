import moviesResults from '../mocks/search.with.results.json';

export function useMovies() {
	const movies = moviesResults.Search;
	const mappedMovies = movies?.map((movie) => ({
		id: movie.imdbID,
		title: movie.Title,
		image: movie.Poster,
		year: movie.Year,
	}));

	return { movies: mappedMovies };
}

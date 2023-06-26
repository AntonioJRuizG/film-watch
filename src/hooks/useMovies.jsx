/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';

export function useMovies() {
	const { updateMovies } = useContext(MoviesContext);

	const movieRepo = async (searchValue) => {
		const res = await fetch(
			`https://www.omdbapi.com/?apikey=4287ad07&s=${searchValue}`
		);

		if (!res.ok) throw console.error('Fetch error');

		const data = await res.json();
		const { Search } = data;

		return Search;
	};

	const getMovies = useCallback(async (searchValue) => {
		const newMovies = await movieRepo(searchValue);
		const mappedMovies = newMovies?.map((movie) => ({
			id: movie.imdbID,
			title: movie.Title,
			image: movie.Poster,
			year: movie.Year,
		}));

		updateMovies(mappedMovies);
	}, []);

	return { getMovies };
}

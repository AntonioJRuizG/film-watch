/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { movieRepo } from '../services/moviesRepo';

export function useMovies() {
	const { updateMovies } = useContext(MoviesContext);

	const getMovies = useCallback(async (searchValue) => {
		const newMovies = await movieRepo(searchValue);
		updateMovies(newMovies);
	}, []);

	return { getMovies };
}

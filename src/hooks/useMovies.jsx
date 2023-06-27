/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useRef } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { movieRepo } from '../services/moviesRepo';

export function useMovies({ searchValue }) {
	const { updateMovies, updateLoading } = useContext(MoviesContext);
	const previousSearchValue = useRef(searchValue);

	const getMovies = useCallback(async (search) => {
		if (previousSearchValue.current === search) return;
		updateLoading(true);
		previousSearchValue.current = search;
		const newMovies = await movieRepo(search);
		updateMovies(newMovies);
		updateLoading(false);
	}, []);

	return { getMovies };
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useRef } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { movieRepo } from '../services/moviesRepo';

export function useMovies(searchValue) {
	const { updateMovies, updateLoading, sort, movies, updateSortMoviesList } =
		useContext(MoviesContext);
	const previousSearchValue = useRef(searchValue);

	const getMovies = useCallback(async (search) => {
		if (previousSearchValue.current === search) return;
		updateLoading(true);
		previousSearchValue.current = search;
		const newMovies = await movieRepo(search);
		updateMovies(newMovies);
		updateLoading(false);
	}, []);

	useEffect(() => {
		if (sort && movies) {
			updateSortMoviesList(
				[...movies]?.sort((a, b) => a.title.localeCompare(b.title))
			);
		}
	}, [sort, movies]);

	return { getMovies };
}

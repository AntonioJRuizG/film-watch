/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
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

	/* const getSortedMovies = () => {
		updateSortMoviesList(
			[...movies]?.sort((a, b) => a.title.localeCompare(b.title))
		);
	}; */

	// NOTE: useMemo avoid unnecessary sortedList computation:
	const sortedMovies = useMemo(() => {
		return movies !== undefined
			? [...movies].sort((a, b) => a.title.localeCompare(b.title))
			: movies;
	}, [movies]);

	useEffect(() => {
		if (sort && movies) {
			updateSortMoviesList(sortedMovies);
		}
	}, [sort, movies]);

	return { getMovies };
}

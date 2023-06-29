/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MoviesContext } from './MoviesContext';

export function MoviesContextProvider({ children }) {
	const [movies, setMovies] = useState([]);
	const [sortedMovies, setSortedMovies] = useState([]);
	const [sort, setSort] = useState(false);
	const [loading, setLoading] = useState(false);

	const updateMovies = (newMovies) => {
		setMovies(newMovies);
	};

	const updateLoading = (arg) => {
		setLoading(arg);
	};

	const sortList = () => {
		setSort(!sort);
	};

	const updateSortMoviesList = (sortedList) => {
		setSortedMovies(sortedList);
	};

	return (
		<MoviesContext.Provider
			value={{
				movies,
				updateMovies,
				loading,
				updateLoading,
				sort,
				sortList,
				sortedMovies,
				updateSortMoviesList,
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
}

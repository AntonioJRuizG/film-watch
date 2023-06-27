/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MoviesContext } from './MoviesContext';

export function MoviesContextProvider({ children }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	const updateMovies = (newMovies) => {
		setMovies(newMovies);
	};

	const updateLoading = (arg) => {
		setLoading(arg);
	};

	return (
		<MoviesContext.Provider
			value={{ movies, updateMovies, loading, updateLoading }}
		>
			{children}
		</MoviesContext.Provider>
	);
}

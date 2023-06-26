/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MoviesContext } from './MoviesContext';

export function MoviesContextProvider({ children }) {
	const [movies, setMovies] = useState([]);

	const updateMovies = (newMovies) => {
		setMovies(newMovies);
	};

	return (
		<MoviesContext.Provider value={{ movies, updateMovies }}>
			{children}
		</MoviesContext.Provider>
	);
}

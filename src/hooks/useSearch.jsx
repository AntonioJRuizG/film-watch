import { useEffect, useRef, useState } from 'react';

export function useSearch() {
	const [searchValue, setSearchValue] = useState('');
	const [error, setError] = useState('');
	const isFirstSearch = useRef(true);

	useEffect(() => {
		if (isFirstSearch.current) {
			isFirstSearch.current = searchValue === '';
			return;
		}

		if (searchValue === '') {
			setError('Cannot search empty movie');
			return;
		}

		if (searchValue.match(/^\d+$/)) {
			setError('Cannot search by numbers');
			return;
		}

		if (searchValue.length < 3) {
			setError('Write at least three characters');
			return;
		}

		setError('');
	}, [searchValue]);

	return { searchValue, error, setSearchValue };
}

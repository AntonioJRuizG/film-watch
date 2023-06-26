import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.jsx';
import './index.scss';
import { MoviesContextProvider } from './context/MoviesContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MoviesContextProvider>
			<App />
		</MoviesContextProvider>
	</React.StrictMode>
);

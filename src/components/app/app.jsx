import Header from '../header/header';
import MoviesList from '../list/list';
import './app.css';

export default function App() {
	return (
		<>
			<Header></Header>
			<main>
				<MoviesList></MoviesList>
			</main>
		</>
	);
}

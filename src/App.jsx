import './App.css';
import Home          from './pages/home';
import NavigationBar from './components/navbar/navbar';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Home />
		</div>
	);
}

export default App;

import './App.css';
import About 			from './components/about';
import Home 			from './components/home';
import NavigationBar 	from './components/navbar/navbar';
import Resume 			from './components/resume';
function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Home />
			<About />
			<Resume />
		</div>
	);
}

export default App;

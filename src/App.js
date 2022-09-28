import './App.css';
import About 			from './components/about';
import Home 			from './components/home';
import NavigationBar 	from './components/navbar/navbar';
import Projects 		from './components/projects';
import Resume 			from './components/resume';
function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Home />
			<About />
			<Resume />
			<Projects />
		</div>
	);
}

export default App;

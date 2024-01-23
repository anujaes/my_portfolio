import './App.css';
import About 			from './pages/home';
// import Home 			from './components/home';
import NavigationBar 	from './components/navbar/navbar';
// import Projects 		from './components/projects';
// import Resume 			from './components/resume';
// import ContactUs 		from './components/contactUs';
// import Footer 			from './components/footer';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			{/* <Home /> */}
			<About />
			{/* <Resume /> */}
			{/* <Projects /> */}
			{/* <ContactUs /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default App;

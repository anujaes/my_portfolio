import './App.css';
import About from './components/about';
import Home from './components/home';
import NavigationBar from './components/navbar/navbar';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

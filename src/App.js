import './App.css';
import Nav from './components/Nav'
import Jumbo from './components/Jumbo'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="jumboContainer">
      <Jumbo />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Nav from './components/Nav'
import Jumbo from './components/Jumbo'
import Project from './components/Project'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from './components/Content';
import About from './components/About'

function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
      <Jumbo>
      <Route exact path="/" component={Content} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Project} />
      </Jumbo>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

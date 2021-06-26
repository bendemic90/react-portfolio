import './App.css';
import Nav from './components/Nav'
import Jumbo from './components/Jumbo'
import Project from './components/Project'
import Footer from './components/Footer'
import { HashRouter, Route } from 'react-router-dom';
import Content from './components/Content';
import About from './components/About'
import FortyTwo from './components/FortyTwo';

function App() {
  return (
  <HashRouter>
    <div className="App">
      <Nav />
      <Jumbo>
      <Route exact path="/" component={Content} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/fortytwo" component={FortyTwo} />
      </Jumbo>
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;

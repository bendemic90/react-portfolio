import { Route } from 'react-router-dom'
import About from './About'
import Landing from './Landing'
import Project from './Project'

export default function Content()  {
    return (
        <div className="content">
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Project} />
        </div>
    )
}


import { Link } from 'react-router-dom'

export default function Nav() {
    const projects = '{ }'
    const aboutMe = '//'
    const home = '<>'
    const fortyTwo = '42';

    return (
        <header id="header" className="navbar justify-content-center header">
            <span className="navbar-text">
                <p className="lead">
                    <span className="symbols">{home}</span>
                    <span> </span><Link to="/"><span className="header-text"><i>h o m e</i></span></Link><span> </span>
                    <span className="symbols">{aboutMe}</span>
                    <span> </span><Link to="/about"><span className="header-text">about.me</span></Link><span> </span>
                    <span className="symbols">{projects}</span>
                    <span> </span><Link to="/projects"><span className="header-text"> projects( ) </span></Link><span> </span>
                    <span className="symbols">{fortyTwo}</span>
                    <span> </span><Link to="/fortytwo"><span className="header-text"> blog </span></Link><span> </span>
                </p>
            </span>
        </header>
    )
}

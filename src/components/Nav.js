export default function Nav() {
    const projects = '{ }'
    const aboutMe = '//'

    return (
        <header id="header" className="navbar justify-content-center header">
            <span className="navbar-text">
                <p className="lead">
                    <span className="symbols">{aboutMe}</span>
                    <span> </span><a href="#"><span className="header-text">about.me</span></a><span> </span>
                    <span className="symbols">{projects}</span>
                    <span> </span><a href="#"><span className="header-text"> projects( ) </span></a><span> </span>
                </p>
            </span>
        </header>
    )
}

export default function Nav() {
    const projects = '{ }'

    return (
        <header id="header" className="navbar justify-content-center header">
            <span className="navbar-text">
                <p className="lead">
                    <span className="symbols">//</span>
                    <span className="header-text"> about.me </span>
                    <span className="symbols">{projects}</span>
                    <span className="header-text"> projects( ) </span>
                </p>
            </span>
        </header>
    )
}

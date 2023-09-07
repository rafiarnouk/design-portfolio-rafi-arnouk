import "./styles.css"
import RALogo from "./imgs/ralogo.svg"

export default function NavBar() {
    return ( 
    <nav className="navbar sticky-top navbar-expand-lg">
        <a href="/" className="navbar-brand"><b><span>Rafi </span> Arnouk</b></a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#expand">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="expand">
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
              <a href="/graphic-design">Graphic Design</a>
            </li>
            <li className="nav-item nav-link">
              <a href="/3d-art">3D Art</a>
            </li>
            <li className="nav-item nav-link">
              <a href="/logos">Logos</a>
            </li>
            <li className="nav-item nav-link">
              <a href="/pop-art">Pop Art</a>
            </li>
          </ul>  
        </div>
      </nav>
    )
}

{/* <nav className="navbar navbar-expand-lg">
        <a href="/" className="page-title"><b><span>Rafi </span> Arnouk</b></a>
        <a href="/" className="home-button"><img src={RALogo}/></a>
        <ul>
          <li>
            <a href="/graphic-design">Graphic Design</a>
          </li>
          <li>
            <a href="/3d-art">3D Art</a>
          </li>
          <li>
            <a href="/logos">Logos</a>
          </li>
          <li>
            <a href="/pop-art">Pop Art</a>
          </li>
        </ul>  
      </nav> */}
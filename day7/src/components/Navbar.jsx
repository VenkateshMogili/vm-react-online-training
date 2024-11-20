import { Link } from "react-scroll";

export default function Navbar() {
  // const navLinks=['Home','About','Skills'];
  return (
    <div>
    <div className="navbar-container">
      <div className="header">
        <h1>Venkatesh Mogili</h1>
      </div>

      <div className="menu">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills"  smooth={true} duration={500}>Skills</Link>
        <Link to="work"  smooth={true} duration={500}>Work</Link>
        <Link to="resume"  smooth={true} duration={500}>Resume</Link>
      </div>
    </div>

    <div className="social-icons">
    <a href=""><i className="fa fa-facebook"/></a>
    <a href=""><i className="fa fa-whatsapp"/></a>
    <a href=""><i className="fa fa-twitter"/></a>
    <a href=""><i className="fa fa-instagram"/></a>
    </div>
    </div>
  )
}

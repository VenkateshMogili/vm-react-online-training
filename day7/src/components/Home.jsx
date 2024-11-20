import { Link } from "react-scroll";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="description">
      <h1>I&apos;m a Full Stack Web Developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vitae pariatur, placeat totam accusamus corrupti soluta aliquid voluptatum sunt, assumenda optio nihil, facilis officiis laboriosam dicta dolorem ab perspiciatis sapiente</p>
      <Link to="about" smooth={true} duration={500}>
      <button className="about-me">About Me <i className="fa fa-arrow-right"/> </button>
      </Link>
      </div>
      <div className="profile-container">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile-image" className="profile-image"/>
      </div>
    </div>
  )
}
